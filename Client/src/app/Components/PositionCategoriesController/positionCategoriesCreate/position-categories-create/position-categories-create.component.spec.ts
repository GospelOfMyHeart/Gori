import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionCategoriesCreateComponent } from './position-categories-create.component';

describe('PositionCategoriesCreateComponent', () => {
  let component: PositionCategoriesCreateComponent;
  let fixture: ComponentFixture<PositionCategoriesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionCategoriesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionCategoriesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
