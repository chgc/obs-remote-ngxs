import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackbitVoteWidgetComponent } from './hackbit-vote-widget.component';

describe('HackbitVoteWidgetComponent', () => {
  let component: HackbitVoteWidgetComponent;
  let fixture: ComponentFixture<HackbitVoteWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackbitVoteWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackbitVoteWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
