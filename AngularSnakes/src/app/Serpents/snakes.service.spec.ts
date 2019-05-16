import { TestBed } from '@angular/core/testing';

import { SnakesService } from './snakes.service';

describe('SnakesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnakesService = TestBed.get(SnakesService);
    expect(service).toBeTruthy();
  });
});
