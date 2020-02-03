import { TestBed } from '@angular/core/testing';

import { DrinkModelConverterService } from './drink-model-converter.service';

describe('DrinkModelConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrinkModelConverterService = TestBed.get(DrinkModelConverterService);
    expect(service).toBeTruthy();
  });
});
