import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-class-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './class-reactive-form.component.html',
  styleUrl: './class-reactive-form.component.css'
})
export class ClassReactiveFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      classes: this.fb.array([])
    })
  }

  get classes() {
    var t = this.form.get('classes') as FormArray;
    return t;
  }

  addClass() {
    var t = this.classes;
    this.classes.push(this.fb.group({
      idClass: ['', Validators.required],
      nameClass: ['', [Validators.required,Validators.pattern('[a-z][1-9]$')]],
      nameTeacher: ['', Validators.required,Validators.maxLength(20)],
    }))
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
