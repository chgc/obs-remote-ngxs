import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackbitVoteWidgetComponent } from './hackbit-vote-widget/hackbit-vote-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HackbitVoteWidgetComponent],
  exports: [HackbitVoteWidgetComponent]
})
export class SharedModule { }
