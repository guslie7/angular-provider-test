import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSpecialComponent } from './report-special.component';

describe('ReportSpecialComponent', () => {
  let component: ReportSpecialComponent;
  let fixture: ComponentFixture<ReportSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
