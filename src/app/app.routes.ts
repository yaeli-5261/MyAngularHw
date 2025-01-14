import { Routes } from '@angular/router';

import { InfromationPopupComponent } from '../componnents/infromation-popup/infromation-popup.component';
import { StudentDetailesComponent } from '../componnents/student-detailes/student-detailes.component';
import { TemplateDrivenFormsComponent } from '../componnents/template-driven-forms/template-driven-forms.component';
import { ClassReactiveFormComponent } from '../componnents/class-reactive-form/class-reactive-form.component';
import { CoursesComponent } from '../componnents/courses/courses.component';
import { StudentListComponent } from '../componnents/student-list/student-list.component';
import { CoursesListComponent } from '../componnents/courses-list/courses-list.component';
import { ConnectApiComponent } from '../componnents/connect-api/connect-api.component';

export const routes: Routes = [
    {path:'infromation-popup',component: InfromationPopupComponent },
    {path:'student-list',component: StudentListComponent },
    {path:'student-detailes',component: StudentDetailesComponent },
    {path:'template-driven-forms',component: TemplateDrivenFormsComponent },
    {path:'class-reactive-form',component: ClassReactiveFormComponent },
    {path:'courses-list',component: CoursesListComponent },
    {path:'connect-api',component: ConnectApiComponent },


];
