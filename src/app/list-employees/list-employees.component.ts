import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListDepartmentsComponent } from '../list-departments/list-departments.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Employee, ServiceEmployeeService } from '../service-employee.service';

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [RouterOutlet, ListDepartmentsComponent, FormsModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent {
  EmployeeService = inject(ServiceEmployeeService);
  SurnameControl = new FormControl('', Validators.required);
  NameControl = new FormControl('', Validators.required);
  PatronymicControl = new FormControl('', Validators.required);
  PositionControl = new FormControl('', Validators.required)
  DepartmentControl = new FormControl('', Validators.required);
  FormEmployee = new FormGroup({
    SurnameControl: this.SurnameControl,
    NameControl: this.NameControl,
    PatronymicControl: this.PatronymicControl,
    PositionControl: this.PositionControl,
    DepartmentControl: this.DepartmentControl,
  })

  submit() {
    if (this.FormEmployee.valid) {
      const newEmployee: Employee = {
        name: this.NameControl.value!,
        surname: this.SurnameControl.value!,
        patronynic: this.PatronymicControl.value!,
        position: this.PositionControl.value!,
        department: this.DepartmentControl.value!,
      };

      this.EmployeeService.addEmployee(newEmployee);
      this.FormEmployee.reset();
    }
  }

  removeEmployee(index: number) {
    const employees = this.EmployeeService.getEmployee();
    employees.splice(index, 1);
  }
}
