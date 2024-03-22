import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {NgForOf} from "@angular/common";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      console.log(data);
      this.employees = data;
    });
  }
}
