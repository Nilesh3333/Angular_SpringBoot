//Author : Nilesh Bommisetty
//This ts file is responsible for getting the data from database by calling restApi

import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students : Student[];
  constructor(private studentService : StudentService) { }

  ngOnInit(): void {

    this.getStudents();
  }

  private getStudents(){
    this.studentService.getStudentsList().subscribe(data =>{
      this.students = data;
    })
  }

}
