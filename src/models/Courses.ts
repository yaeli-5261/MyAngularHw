import { enumCourses } from "./enumCourses";

export class courses{
   
    constructor(
        public IdCourses:number,
        public NaneCourses:string,
        public subject:enumCourses,
       
    ){}
}