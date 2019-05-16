import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LezardMiniaturesComponent } from './lezards-miniatures.component';

describe('LezardsMiniaturesComponent', () => {
  let component: LezardMiniaturesComponent;
  let fixture: ComponentFixture<LezardMiniaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LezardMiniaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LezardMiniaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
