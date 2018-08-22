import { ObsService } from './obs.service';
import { Subject } from 'rxjs';
import { ObsSocketService } from './obs-socket.service';

describe('ObsService', () => {
  let service: ObsService;
  let ObsSocketServiceSpy;
  let mockObs: Subject<any>;

  beforeEach(() => {
    ObsSocketServiceSpy = jasmine.createSpyObj('ObsSocketService', ['connect']);
    service = new ObsService(ObsSocketServiceSpy);
  });

  beforeEach(() => {
    mockObs = new Subject();
    ObsSocketServiceSpy.connect.and.returnValue(mockObs);
  });

  it('it should create ObsService', () => {
    expect(service).toBeTruthy();
  });

  it('requestTask should return an id and type', () => {
    const { id, type } = service.requestTask('test');
    expect(id).toBe('1');
    expect(type).toBe('test');
  });

  it('it should create a request command with message-id', () => {
    service.connect();
    mockObs.subscribe(value => {
      console.log(value);
    });
    service.requestCommand(service.requestTask('test'));
  });
});
