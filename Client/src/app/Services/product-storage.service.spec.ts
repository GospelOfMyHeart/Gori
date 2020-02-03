import { TestBed } from '@angular/core/testing';

import { ProductStorageService } from './product-storage.service';

describe('ProductStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductStorageService = TestBed.get(ProductStorageService);
    expect(service).toBeTruthy();
  });
});
