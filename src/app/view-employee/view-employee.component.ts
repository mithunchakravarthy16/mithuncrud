import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  id! : number;

  employees : Employee = new Employee;

  

  constructor(private employeeService : EmployeeService, private activatedRoute : ActivatedRoute, private route : Router ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employees = data;
    },error => console.log(error) );
  }

  closeEmployee(){
    this.route.navigate(['employees']);
  }

}
