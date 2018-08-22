import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConnectGuard } from './connect.guard';
import { NgxsModule } from '@ngxs/store';
import { ObsState } from '@store/obs.state';
import { ScenesState } from '@store/scenes.state';
import { SourcesState } from '@store/source.state';
import { TransitionState } from '@store/transition.state';

describe('ConnectGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectGuard],
      imports: [NgxsModule.forRoot([ObsState, ScenesState, SourcesState, TransitionState]), RouterTestingModule]
    });
  });

  it(
    'should ...',
    inject([ConnectGuard], (guard: ConnectGuard) => {
      expect(guard).toBeTruthy();
    })
  );
});
