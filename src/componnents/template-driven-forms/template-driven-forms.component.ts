import { Component, Input } from '@angular/core';
import { Teacher } from '../../models/Teacher';
import { FormBuilder, FormsModule } from '@angular/forms';
import { TeacherService } from '../../Services/teacher.service';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {

  constructor(private teacherService:TeacherService ) {

  }
  public techersArr:Teacher[]=this.teacherService.getTeachers()
  public teacher:Teacher=new Teacher("",this.techersArr.length+1,[])//מורה שלא קים במערך כלל

  OnSubmit() {
    if(!this.techersArr.find(t=>this.teacher.teacherId==t.teacherId))
      this.teacherService.addTeachers(new Teacher(this.teacher.teacerName,this.teacher.teacherId,this.teacher.teacherClass))
    else
      this.teacherService.updateTeachers(new Teacher(this.teacher.teacerName,this.teacher.teacherId,this.teacher.teacherClass))
  }
}
