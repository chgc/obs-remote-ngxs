import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FormGroup, FormControl } from '@angular/forms';
import { ObsConnect } from '@store/obs.actions';
import { ObsModel } from '@store/obs.state';

@Component({
  selector: 'hex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData = new FormGroup({
    host: new FormControl('localhost'),
    port: new FormControl('4444')
  });
  constructor(private router: Router, private store: Store) {}

  connect() {
    this.store
      .dispatch(new ObsConnect(this.formData.get('host').value, this.formData.get('port').value))
      .subscribe(store => {
        if (store.obs && store.obs.isConnect) {
          this.router.navigate(['/', 'dashboard']);
        }
      });
  }
}
