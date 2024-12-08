import { ElementRef } from '@angular/core';
import { CourseDirectiveDirective } from './course-directive.directive';

describe('CourseDirectiveDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {} as ElementRef;
    const directive =new CourseDirectiveDirective(elementRefMock);

    expect(directive).toBeTruthy();
  });
});
