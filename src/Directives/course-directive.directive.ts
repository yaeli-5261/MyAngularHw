import { Directive, ElementRef, input, Input } from '@angular/core';

@Directive({
  selector: '[appCourseDirective]',
  standalone: true
})
export class CourseDirectiveDirective {

  constructor(private el:ElementRef) { }

  @Input() color!:string;

  ngOnInit():void{
    this.changeColor();
  }
  public changeColor(){
    this.el.nativeElement.style.backgroundColor=this.color;
  }
 
}


