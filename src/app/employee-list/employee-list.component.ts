import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        emailId: 'john@gmail.com'
      },
      {
        id: 2,
        firstName: 'Karan',
        lastName: 'Patel',
        emailId: 'karen@gmail.com'
      }
    ]
  }

}
