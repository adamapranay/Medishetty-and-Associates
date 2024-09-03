/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhoWeServeComponent } from './WhoWeServe.component';

describe('WhoWeServeComponent', () => {
  let component: WhoWeServeComponent;
  let fixture: ComponentFixture<WhoWeServeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoWeServeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWeServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
