import { Component, EventEmitter, Input, Output, ViewChild, viewChild } from '@angular/core';
import { student} from '../../models/student';
import { InfromationPopupComponent } from '../infromation-popup/infromation-popup.component';
import { log } from 'node:console';
//  import { first } from 'rxjs';
@Component({
  selector: 'app-student-detailes',
  standalone: true,
  imports: [InfromationPopupComponent],
  templateUrl: './student-detailes.component.html',
  styleUrl: './student-detailes.component.css'
})
export class StudentDetailesComponent {
  @ViewChild(InfromationPopupComponent)child!:InfromationPopupComponent
   public s:student=new student(1," "," ");
   @Output() saveStudent: EventEmitter<any> = new EventEmitter<any>();
   @Input() stud!:student;//משתנה שמקבל את התלמיד מהקומפוננטה STUDENT LIST 
  //  @Input()stud:any;
 
   childSave(id:number,firstName:string,lastName:string){

    this.s = new student(id,firstName,lastName);
    this.saveStudent.emit(this.s);
    console.log(this.s)

   }
      DeleteStudent(){
      this.child.ShowPopUp('האם בטוח שברצונך למחוק את התלמיד?');
    }

}