import { Component, Injectable } from '@angular/core';
import { courses } from '../../models/Courses';
import { CourseServiceService } from '../../Services/course-service.service';
import { CourseDirectiveDirective } from '../../Directives/course-directive.directive';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseDirectiveDirective],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
@Injectable({providedIn: 'root'})
export class CoursesComponent {

  public courses:courses[]=[];

  public select:courses[]=[];

  public colorArr=["red", "green", "yellow", "blue", "grey", "orange", "purple"  ,"violet", "pink"];
  public i=0;
  pushI=()=>{this.i+=1};


  updateCourse(c:courses){

    if(this.select.includes(c))
        this.select=this.select.filter(option=>option.IdCourses!=c.IdCourses)
    else
      this.select.push(c);
  }
  
  constructor(private courseService:CourseServiceService) {
    this.courses=this.courseService.getCourses();
  }
  
  dataMap = new Map<string, string[]>([
    ['Fruits', ['Apple', 'Orange', 'Banana']],
    ['Vegetables', ['Tomato', 'Potato', 'Onion']],
    ['Apple', ['Fuji', 'Macintosh']],
    ['Onion', ['Yellow', 'White', 'Purple']],
  ]);

  rootLevelNodes: string[] = ['Fruits', 'Vegetables'];

  // initialData(): DynamicFlatNode[] {
  //   return this.rootLevelNodes.map(name => new courses());
  // }

  getChildren(node: string): string[] | undefined {
    return this.dataMap.get(node);
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
}
