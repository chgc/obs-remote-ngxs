export class ScenesLoad {
  static readonly type = '[scene] Load';
}

export class ScenesSwitch {
  static readonly type = '[scene] switch scene';
  constructor(public sceneName: string) {}
}

export class GetCurrentScene {
  static readonly type = '[scene] get current scene';
}
