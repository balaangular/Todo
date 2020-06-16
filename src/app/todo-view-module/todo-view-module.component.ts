import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-view-module',
  templateUrl: './todo-view-module.component.html',
  styleUrls: ['./todo-view-module.component.css']
})
export class TodoViewModuleComponent implements OnInit {

  todoForm: FormGroup;
  submitted = false;
  txtAreaHide = false;
  addBtnHide = true;
  saveBtnHide = false;
  taskData = [];

  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      taskName: ['', [Validators.required]],
    });
  }

  get f() { return this.todoForm.controls; }

  addTaskMethod(eve) {
    if (eve === true) {
      this.txtAreaHide = true;
      this.addBtnHide = false;
      this.saveBtnHide = true;
    } else {
      this.txtAreaHide = false;
      this.addBtnHide = true;
      this.saveBtnHide = false;
    }
  }

  saveTaskMethod() {
    this.submitted = true;
    if (this.todoForm.invalid) {
      return;
    }
    this.txtAreaHide = false;
    this.addBtnHide = true;
    this.saveBtnHide = false;
    this.taskData.unshift({id: this.taskData.length , name: this.todoForm.value.taskName});
    this.todoForm.reset();
    this.submitted = false;
  }

  deleteMethod(eve) {
    this.taskData.splice(eve, 1);
  }

}
