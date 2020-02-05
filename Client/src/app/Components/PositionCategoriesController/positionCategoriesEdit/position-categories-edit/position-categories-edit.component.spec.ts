import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionCategoriesEditComponent } from './position-categories-edit.component';

describe('PositionCategoriesEditComponent', () => {
  let component: PositionCategoriesEditComponent;
  let fixture: ComponentFixture<PositionCategoriesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionCategoriesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionCategoriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
