import { Component, OnInit } from '@angular/core';
import { SourceModel } from '@store/source.state';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { SourceRenderToggle } from '@store/source.actions';

@Component({
  selector: 'hex-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent {
  @Select(state => state.obs.sources)
  sources$: Observable<SourceModel[]>;

  constructor(private store: Store) {}

  toggleRender(source) {
    this.store.dispatch(new SourceRenderToggle(source));
  }
}
