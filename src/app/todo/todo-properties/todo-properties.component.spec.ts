import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPropertiesComponent } from './todo-properties.component';

describe('TodoPropertiesComponent', () => {
  let component: TodoPropertiesComponent;
  let fixture: ComponentFixture<TodoPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
