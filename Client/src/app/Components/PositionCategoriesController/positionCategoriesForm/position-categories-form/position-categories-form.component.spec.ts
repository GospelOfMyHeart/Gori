import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionCategoriesFormComponent } from './position-categories-form.component';

describe('PositionCategoriesFormComponent', () => {
  let component: PositionCategoriesFormComponent;
  let fixture: ComponentFixture<PositionCategoriesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionCategoriesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionCategoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
