import { Injectable } from '@angular/core';
import { Teacher } from '../models/Teacher';
import { student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {


  private AllTeacher = [
    new Teacher("yael", 1, ["v1", "v2", "v3"]),
    new Teacher("ruty", 2, ["v2", "v3"]),
    new Teacher("esty", 3, ["v1", "v3"]),
  ]
  constructor() { }
  getTeachers() {
    return this.AllTeacher
  }
  updateTeachers(teacher: Teacher) {
    const teachertUp = this.AllTeacher.find(t =>
      t.teacherId = teacher.teacherId)
    if (teachertUp) {
      teachertUp.teacherId = teacher.teacherId
      teachertUp.teacerName = teacher.teacerName
      teachertUp.teacherClass = teacher.teacherClass
    }
  }
  addTeachers(teacher: Teacher) {
    this.AllTeacher.push(teacher)
  }
  deleteTeachers(teacher: Teacher) {
    const updateTeachersArr = this.AllTeacher.filter(t => t.teacherId != teacher.teacherId)
  }

}
