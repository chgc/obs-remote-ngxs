import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FormControl } from '@angular/forms';
import { SceneModel } from '@store/scenes.state';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { ScenesSwitch } from '@store/scene.actions';

@Component({
  selector: 'hex-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.css']
})
export class ScenesComponent implements AfterViewInit {
  @ViewChild('scenes') scenes: FormControl;

  @Select(state => state.obs.scenes)
  scenes$: Observable<SceneModel[]>;

  @Select(state => state.obs['current-scene'])
  currentScene$: Observable<string>;

  constructor(private store: Store) {}

  ngAfterViewInit() {
    this.scenes.valueChanges.pipe(filter(value => value)).subscribe(sceneName => {
      this.store.dispatch(new ScenesSwitch(sceneName));
    });
  }
}
