import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStorageEditComponent } from './product-storage-edit.component';

describe('ProductStorageEditComponent', () => {
  let component: ProductStorageEditComponent;
  let fixture: ComponentFixture<ProductStorageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductStorageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStorageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
