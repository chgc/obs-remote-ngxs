export class TransitionLoad {
  static readonly type = '[transition] Load';
}

export class TransitionChange {
  static readonly type = '[transition] change';
  constructor(public name: string) {}
}
