import { Injectable } from '@angular/core';

export interface Department {
  name: string,
}


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [];

  getDepartment() {
    return this.departments

  }
  addDepartment(department: Department) {
    this.departments.push(department);
  }
}
