import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ObsDisconnect } from '@store/obs.actions';

@Component({
  selector: 'hex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store, private router: Router) {}

  disconnect() {
    this.store.dispatch(new ObsDisconnect());
    this.router.navigate(['/']);
  }
}
