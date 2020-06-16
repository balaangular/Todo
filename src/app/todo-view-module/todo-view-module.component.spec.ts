import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoViewModuleComponent } from './todo-view-module.component';

describe('TodoViewModuleComponent', () => {
  let component: TodoViewModuleComponent;
  let fixture: ComponentFixture<TodoViewModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoViewModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoViewModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
