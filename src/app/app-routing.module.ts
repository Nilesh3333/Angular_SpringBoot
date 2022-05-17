//Author : Nilesh Bommisetty
//This ts file help to route between survey form html page and survey list html page

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path : 'students' , component: StudentListComponent},
  {path : 'create-survey' , component: CreateStudentComponent},
  {path : '',redirectTo:'students',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
