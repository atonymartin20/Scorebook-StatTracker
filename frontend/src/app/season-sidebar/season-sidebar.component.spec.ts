import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonSidebarComponent } from './season-sidebar.component';

describe('SeasonSidebarComponent', () => {
  let component: SeasonSidebarComponent;
  let fixture: ComponentFixture<SeasonSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
