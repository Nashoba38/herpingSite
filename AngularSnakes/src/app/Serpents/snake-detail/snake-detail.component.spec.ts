import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeDetailComponent } from './snake-detail.component';

describe('SnakeDetailComponent', () => {
  let component: SnakeDetailComponent;
  let fixture: ComponentFixture<SnakeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
