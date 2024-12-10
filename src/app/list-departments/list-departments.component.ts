import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Department, DepartmentService } from '../department.service';

@Component({
  selector: 'app-list-departments',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './list-departments.component.html',
  styleUrl: './list-departments.component.css'
})
export class ListDepartmentsComponent {
  DepartmentService = inject(DepartmentService);
  NameDepartmentControl = new FormControl('', Validators.required);

  FormDepartment = new FormGroup({
    NameDepartmentControl: this.NameDepartmentControl,
  })

  submit() {
    if (this.FormDepartment.valid) {
      const newDepartment: Department = {
        name: this.NameDepartmentControl.value!,
      };

      this.DepartmentService.addDepartment(newDepartment);
      this.FormDepartment.reset();
    }
  }

  removeDepartment(index: number) {
    const departments = this.DepartmentService.getDepartment();
    departments.splice(index, 1);
  }
}
