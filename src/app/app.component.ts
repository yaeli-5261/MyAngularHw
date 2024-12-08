import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from '../componnents/student-list/student-list.component';
import { StudentDetailesComponent } from '../componnents/student-detailes/student-detailes.component';
import { CoursesComponent } from "../componnents/courses/courses.component";
import { TemplateDrivenFormsComponent } from "../componnents/template-driven-forms/template-driven-forms.component";
import {  } from "module";
import { IconPipe } from "./pipes/icon.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentListComponent, TemplateDrivenFormsComponent, IconPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'yaeli naaman';
  goodWord() {
    let hour = new Date().getHours();
    if (hour > 6 && hour < 12)
      return "good morning!"
    if (hour > 12 && hour < 16)
      return "good noon!"
    if (hour > 16 && hour < 20)
      return "good afternoon!"
    else
      return "good night!"
  }

}

