import { State, Action, StateContext } from '@ngxs/store';
import { TransitionLoad, TransitionChange } from '@store/transition.action';
import { ObsService } from '../services/obs.service';
import { ObsDispatchEvent } from '@store/obs.actions';

export interface TransitionModel {
  name: string;
}

@State<TransitionModel[]>({
  name: 'transitions',
  defaults: []
})
export class TransitionState {
  constructor(private service: ObsService) {}

  @Action(TransitionLoad)
  loadTransitions(ctx: StateContext<TransitionModel[]>, action: TransitionLoad) {
    this.service.requestCommand({ ...this.service.requestTask('GetTransitionList') });
  }

  @Action(TransitionChange)
  changeTransition(ctx: StateContext<TransitionModel[]>, action: TransitionChange) {
    this.service.requestCommand({
      ...this.service.requestTask('SetCurrentTransition'),
      payload: { 'transition-name': action.name }
    });
  }

  // Watch Event Stream

  @Action(ObsDispatchEvent)
  receiveEvent(ctx: StateContext<TransitionModel[]>, action: ObsDispatchEvent) {
    console.log(action);
    if (action.payload['update-type']) {
      this.processUpdateEvent(ctx, action);
      return;
    }
    const { id, actionType } = this.service.getActionType(action.payload);
    const state = ctx.getState();
    switch (actionType) {
      case 'GetTransitionList':
        ctx.setState([...action.payload.transitions]);
        break;
    }
  }

  private processUpdateEvent(ctx: StateContext<TransitionModel[]>, action: ObsDispatchEvent) {
    const state = ctx.getState();
    switch (action.payload['update-type']) {
      case 'TransitionListChanged':
        ctx.dispatch(new TransitionLoad());
        break;
    }
  }
}
