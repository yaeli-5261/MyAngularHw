import { Component } from '@angular/core';
import { student } from '../../models/student';
import { StudentDetailesComponent } from "../student-detailes/student-detailes.component";
import { NgTemplateOutlet } from '@angular/common';
import { CoursesComponent } from "../courses/courses.component";
@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentDetailesComponent, NgTemplateOutlet, CoursesComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  public students:student[]=[new student(1,"yaeli","naaman"),new student(2,"ruty","choen"),new student(1,"shira","levi")];

  update(std:student){
   std.flag=true;
  }
  buttonAdd=false
  turnOnButton=()=>{this.buttonAdd=true}

  ParentSave(s:student){
    this.students.push(s);
  }
}
