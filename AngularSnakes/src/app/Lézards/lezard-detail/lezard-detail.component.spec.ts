import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LezardDetailComponent } from './lezard-detail.component';

describe('LezardDetailComponent', () => {
  let component: LezardDetailComponent;
  let fixture: ComponentFixture<LezardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LezardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LezardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
