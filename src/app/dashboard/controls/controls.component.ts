import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ObsStreamingToggle, ObsRecordingToggle } from '@store/obs.actions';

@Component({
  selector: 'hex-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {
  displayStreamingButton$;
  displayRecordingButton$;

  constructor(private store: Store) {
    this.displayStreamingButton$ = store.select(state => state.obs).pipe(
      map(obs => {
        if (obs.streaming) {
          return `${obs.streamStartStoping ? 'stopping' : 'stop'} streaming`;
        }
        return `${obs.streamStartStoping ? 'starting' : 'start'} streaming`;
      })
    );
    this.displayRecordingButton$ = store.select(state => state.obs).pipe(
      map(obs => {
        if (obs.recording) {
          return `${obs.recordStartStoping ? 'stopping' : 'stop'} recording`;
        }
        return `${obs.recordStartStoping ? 'starting' : 'start'} recording`;
      })
    );
  }

  toggleStreaming() {
    this.store.dispatch(new ObsStreamingToggle());
  }

  toggleRecording() {
    this.store.dispatch(new ObsRecordingToggle());
  }
}
