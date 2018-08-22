import { TestBed, inject } from '@angular/core/testing';

import { ObsSocketService } from './obs-socket.service';

describe('ObsSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObsSocketService]
    });
  });

  it('should be created', inject([ObsSocketService], (service: ObsSocketService) => {
    expect(service).toBeTruthy();
  }));
});
