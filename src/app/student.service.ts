//Author : Nilesh Bommisetty
//This file act as a service to student-lits and create-Student

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL ="http://localhost:8080/api/v1/students"
  constructor(private httpClient: HttpClient) { }

    getStudentsList(): Observable<Student[]>{
        return this.httpClient.get<Student[]>(`${this.baseURL}`);
    }

    createStudent(student: Student) :Observable<object>{
      return this.httpClient.post(`${this.baseURL}`,student);
    }
}
