import { State, StateContext, Action } from '@ngxs/store';
import { ObsService } from '../services/obs.service';
import { ObsDispatchEvent } from '@store/obs.actions';
import { SourceRenderToggle } from '@store/source.actions';
import { GetCurrentScene } from '@store/scene.actions';

export interface SourceModel {
  name: string;
  render: boolean;
  volume: number;
  type: string;
}

@State<SourceModel[]>({
  name: 'sources',
  defaults: []
})
export class SourcesState {
  constructor(private service: ObsService) {}

  @Action(SourceRenderToggle)
  setSourceProperty(ctx: StateContext<SourceModel[]>, action: SourceRenderToggle) {
    this.service.requestCommand({
      ...this.service.requestTask('SetSceneItemProperties'),
      payload: { item: action.source.name, visible: !action.source.render }
    });
  }

  @Action(ObsDispatchEvent)
  receiveEvent(ctx: StateContext<SourceModel[]>, action: ObsDispatchEvent) {
    console.log(action);
    if (action.payload['update-type']) {
      this.processUpdateEvent(ctx, action);
      return;
    }
    const { id, actionType } = this.service.getActionType(action.payload);
    const state = ctx.getState();
    switch (actionType) {
      case 'GetSceneList':
        const scene = action.payload.scenes.find(s => s.name === action.payload['current-scene']);
        if (scene) {
          ctx.setState([...scene.sources]);
        }
        break;
      case 'GetCurrentScene':
        ctx.setState([...action.payload.sources]);
        break;
    }
  }

  private processUpdateEvent(ctx: StateContext<SourceModel[]>, action: ObsDispatchEvent) {
    const state = ctx.getState();
    switch (action.payload['update-type']) {
      case 'SwitchScenes':
        ctx.setState([...action.payload.sources]);
        break;
      case 'SceneItemVisibilityChanged':
        const newstate = state.map(x => {
          if (x.name === action.payload['item-name']) {
            x.render = action.payload['item-visible'];
          }
          return x;
        });
        ctx.setState([...newstate]);
        break;
      case 'SceneItemAdded':
      case 'SceneItemRemoved':
      case 'SourceOrderChanged':
        ctx.dispatch(new GetCurrentScene());
        break;
    }
  }
}
