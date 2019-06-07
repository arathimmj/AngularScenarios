import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSibling2Component } from './component-sibling2.component';

describe('ComponentSibling2Component', () => {
  let component: ComponentSibling2Component;
  let fixture: ComponentFixture<ComponentSibling2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSibling2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSibling2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
