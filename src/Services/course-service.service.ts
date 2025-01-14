import { Injectable } from '@angular/core';
import { courses } from '../models/Courses';
import { enumCourses } from '../models/enumCourses';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private AllCourses=[
    
    new courses(1,"sql",enumCourses.sql),
    new courses(2,"llm",enumCourses.llm),
    new courses(3,"c",enumCourses.C),
    new courses(1,"cSharp",enumCourses.cSharp),
    new courses(2,"phtyon",enumCourses.phtyon),
    new courses(3,"Grafick",enumCourses.Grafick),
    
  ]
  constructor() { }
  getCourses(){
    return this.AllCourses;
  }
  
}
