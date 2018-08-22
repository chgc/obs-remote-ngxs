import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { take, filter, map, tap, takeUntil } from 'rxjs/operators';
import { Subject, defer } from 'rxjs';
import { ObsSocketService } from './obs-socket.service';

@Injectable({
  providedIn: 'root'
})
export class ObsService {
  private task = new Map<string, string>();
  private send$ = new Subject();
  private obs$: WebSocketSubject<any>;
  private messageId = 0;
  private destroy$ = new Subject();
  channel$ = defer(() => {
    if (this.obs$) {
      return this.obs$.asObservable();
    }
  });

  private processCommand$ = this.send$.pipe(
    takeUntil(this.destroy$),
    filter(() => !!this.obs$),
    map(({ id, type, payload = {} }) => {
      return {
        ...{
          'message-id': id,
          'request-type': type
        },
        ...payload
      };
    }),
    tap(message => this.obs$.next(message))
  );

  private nextId = (): string => String(++this.messageId);

  requestCommand = request => this.send$.next(request);

  requestTask(type) {
    if (this.task.size > 100) {
      this.task.clear();
    }
    const id = this.nextId();
    this.task.set(id, type);
    return { id, type };
  }

  getActionType(payload) {
    return {
      id: payload['message-id'],
      actionType: this.task.get(payload['message-id'])
    };
  }

  connect(host = 'localhost', port = '4444') {
    this.obs$ = this.obsSocketService.connect(host, port);
    this.start();
    this.requestCommand({ ...this.requestTask('GetVersion') });
  }

  disconnect() {
    this.stop();
  }

  constructor(private obsSocketService: ObsSocketService) {}
  private start() {
    this.processCommand$.subscribe();
  }

  private stop() {
    this.destroy$.next('');
    this.obs$ = undefined;
  }
}
