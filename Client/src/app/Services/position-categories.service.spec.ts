import { TestBed } from '@angular/core/testing';

import { PositionCategoriesService } from './position-categories.service';

describe('PositionCategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PositionCategoriesService = TestBed.get(PositionCategoriesService);
    expect(service).toBeTruthy();
  });
});
