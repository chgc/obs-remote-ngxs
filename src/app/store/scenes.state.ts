import { State, Action, StateContext } from '@ngxs/store';
import { ObsService } from '../services/obs.service';
import { ObsConnected, ObsDispatchEvent } from '@store/obs.actions';
import { ScenesLoad, ScenesSwitch, GetCurrentScene } from '@store/scene.actions';

export interface SceneModel {
  name: string;
}

@State<SceneModel[]>({
  name: 'scenes',
  defaults: []
})
export class ScenesState {
  constructor(private service: ObsService) {}

  @Action(ScenesLoad)
  loadSenceList(ctx: StateContext<SceneModel[]>, action: ScenesLoad) {
    this.service.requestCommand({ ...this.service.requestTask('GetSceneList') });
  }

  @Action(ScenesSwitch)
  switchScene(ctx: StateContext<SceneModel[]>, action: ScenesSwitch) {
    this.service.requestCommand({
      ...this.service.requestTask('SetCurrentScene'),
      payload: { 'scene-name': action.sceneName }
    });
  }

  @Action(GetCurrentScene)
  getCurrentScene(ctx: StateContext<SceneModel[]>, action: GetCurrentScene) {
    this.service.requestCommand({ ...this.service.requestTask('GetCurrentScene') });
  }

  @Action(ObsDispatchEvent)
  receiveEvent(ctx: StateContext<SceneModel[]>, action: ObsDispatchEvent) {
    if (action.payload['update-type']) {
      this.processUpdateEvent(ctx, action);
      return;
    }
    const { id, actionType } = this.service.getActionType(action.payload);
    const state = ctx.getState();
    switch (actionType) {
      case 'GetSceneList':
        ctx.setState([...action.payload['scenes']]);
        break;
    }
  }
  private processUpdateEvent(ctx: StateContext<SceneModel[]>, action: ObsDispatchEvent) {
    const state = ctx.getState();
    switch (action.payload['update-type']) {
    }
  }
}
