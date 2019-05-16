import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakesComponent } from './snakes.component';

describe('SnakesComponent', () => {
  let component: SnakesComponent;
  let fixture: ComponentFixture<SnakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
