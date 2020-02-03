/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormBackComponent } from './FormBack.component';

describe('FormBackComponent', () => {
  let component: FormBackComponent;
  let fixture: ComponentFixture<FormBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
