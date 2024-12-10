import { Injectable } from '@angular/core';

export interface Employee {
  name: string,
  surname: string,
  patronynic: string,
  position: string,
  department: string
}

@Injectable({
  providedIn: 'root'
})
export class ServiceEmployeeService {

  private employees: Employee[] = [];

  getEmployee() {
    return this.employees

  }
  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }
}
