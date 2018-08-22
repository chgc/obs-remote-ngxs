import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TransitionModel } from '@store/transition.state';
import { filter } from 'rxjs/operators';
import { TransitionChange } from '@store/transition.action';

@Component({
  selector: 'hex-transitions',
  templateUrl: './transitions.component.html',
  styleUrls: ['./transitions.component.css']
})
export class TransitionsComponent implements AfterViewInit {
  @ViewChild('transitions') scenes: FormControl;

  @Select(state => state.obs.transitions)
  transitions$: Observable<TransitionModel[]>;

  @Select(state => state.obs['current-transition'])
  currentTransition$: Observable<string>;

  constructor(private store: Store) {}

  ngAfterViewInit() {
    this.scenes.valueChanges.pipe(filter(value => value)).subscribe(transitionName => {
      this.store.dispatch(new TransitionChange(transitionName));
    });
  }
}
