import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LezardsComponent } from './lezards.component';

describe('LezardsComponent', () => {
  let component: LezardsComponent;
  let fixture: ComponentFixture<LezardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LezardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LezardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
