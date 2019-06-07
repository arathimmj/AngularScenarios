import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGrandParentComponent } from './component-grand-parent.component';

describe('ComponentGrandParentComponent', () => {
  let component: ComponentGrandParentComponent;
  let fixture: ComponentFixture<ComponentGrandParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentGrandParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentGrandParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
