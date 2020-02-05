import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionCategoriesComponent } from './position-categories.component';

describe('PositionCategoriesComponent', () => {
  let component: PositionCategoriesComponent;
  let fixture: ComponentFixture<PositionCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
