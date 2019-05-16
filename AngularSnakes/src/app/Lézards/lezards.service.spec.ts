import { TestBed } from '@angular/core/testing';

import { LezardsService } from './lezards.service';

describe('LezardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LezardsService = TestBed.get(LezardsService);
    expect(service).toBeTruthy();
  });
});
