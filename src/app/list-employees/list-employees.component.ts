import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListDepartmentsComponent } from '../list-departments/list-departments.component';

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [RouterOutlet, ListDepartmentsComponent],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent {

}
