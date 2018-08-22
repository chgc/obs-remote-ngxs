export class ObsConnect {
  static readonly type = '[obs] Connect';
  constructor(public host: string, public port: string) {}
}

export class ObsDisconnect {
  static readonly type = '[obs] Disconnect';
}

export class ObsConnected {
  static readonly type = '[obs] Connected';
}

export class ObsDispatchEvent {
  static readonly type = '[obs] dispatchEvent';
  constructor(public payload: any) {}
}

export class ObsStreamingStatus {
  static readonly type = '[obs] get streaming/recording status';
}
export class ObsStreamingToggle {
  static readonly type = '[obs] start/stop streaming';
}

export class ObsRecordingToggle {
  static readonly type = '[obs] start/stop recording';
}
