import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { ScenesComponent } from './scenes/scenes.component';
import { SourcesComponent } from './sources/sources.component';
import { TransitionsComponent } from './transitions/transitions.component';
import { ControlsComponent } from './controls/controls.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [DashboardComponent, ScenesComponent, SourcesComponent, TransitionsComponent, ControlsComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
