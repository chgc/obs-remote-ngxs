import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}
  canActivate() {
    return this.store.select((state: any) => state.obs.isConnect).pipe(
      tap(isConnect => {
        if (!isConnect) {
          this.router.navigate(['/']);
        }
      })
    );
  }
}
