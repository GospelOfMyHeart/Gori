import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStorageCreateComponent } from './product-storage-create.component';

describe('ProductStorageCreateComponent', () => {
  let component: ProductStorageCreateComponent;
  let fixture: ComponentFixture<ProductStorageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductStorageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStorageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
