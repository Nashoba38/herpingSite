import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakesMiniaturesComponent } from './snakes-miniatures.component';

describe('SnakesMiniaturesComponent', () => {
  let component: SnakesMiniaturesComponent;
  let fixture: ComponentFixture<SnakesMiniaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakesMiniaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakesMiniaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
