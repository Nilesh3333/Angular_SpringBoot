//author : Nilesh Bommisetty
//This ts file will store the data to dataBase and redirect the page to Survey List after submitting the Survey Form

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student  : Student = new Student();
  constructor(private studentService: StudentService,private router: Router) { }
  
  radioOptions = ["friends", "television", "internet", "other"]
  liked = [{ name: 'Students', checked: false }, { name: 'Location', checked: false }, { name: 'Campus', checked: false }, { name: 'Atmosphere', checked: false }, { name: 'Dorm Rooms', checked: false }, { name: 'Sports', checked: false }]
  

  ngOnInit(): void {
  }

  saveStudent(){
    this.studentService.createStudent(this.student).subscribe(data =>{
        console.log(data);
        this.gotoSurveyList();
    },
    error => console.log(error)); 
  }

  gotoSurveyList(){
      this.router.navigate([`/students`])
  }

  onSubmit(){
    console.log(this.student);
    this.student.likedMost = this.liked
            .filter(opt => opt.checked)
            .map(opt => opt.name);
    

    this.saveStudent();
  }
}
