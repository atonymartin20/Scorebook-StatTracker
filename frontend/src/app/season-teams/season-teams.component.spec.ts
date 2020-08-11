import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonTeamsComponent } from './season-teams.component';

describe('SeasonTeamsComponent', () => {
  let component: SeasonTeamsComponent;
  let fixture: ComponentFixture<SeasonTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
