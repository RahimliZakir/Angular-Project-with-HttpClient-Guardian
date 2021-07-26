/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoToTopComponent } from './go-to-top.component';

describe('GoToTopComponent', () => {
  let component: GoToTopComponent;
  let fixture: ComponentFixture<GoToTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoToTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
