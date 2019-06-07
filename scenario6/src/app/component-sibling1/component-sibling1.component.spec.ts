import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSibling1Component } from './component-sibling1.component';

describe('ComponentSibling1Component', () => {
  let component: ComponentSibling1Component;
  let fixture: ComponentFixture<ComponentSibling1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSibling1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSibling1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
