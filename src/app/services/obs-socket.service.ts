import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class ObsSocketService {
  connect(host = 'localhost', port = '4444') {
    return new WebSocketSubject(`ws://${host}:${port}`);
  }
}
