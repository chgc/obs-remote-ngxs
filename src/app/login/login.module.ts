import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';

@NgModule({
  imports: [CommonModule, SharedMaterialModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {}
