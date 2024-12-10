import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { Vacancy, VacancyService} from '../vacancy.service';

@Component({
  selector: 'app-list-vacancy',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './list-vacancy.component.html',
  styleUrl: './list-vacancy.component.css'
})
export class ListVacancyComponent {
  VacancyService = inject(VacancyService);
  NameVacancyControl = new FormControl('', Validators.required);

  FormVacancy = new FormGroup({
    NameVacancyControl: this.NameVacancyControl,

  })

  submit() {
    if(this.FormVacancy.valid) {
      const newVacancy: Vacancy = {
        name: this.NameVacancyControl.value!
      }
      this.VacancyService.addVacancy(newVacancy);
      this.FormVacancy.reset();
    }
  }

  removeVacancy(index: number) {
    const vacancy = this.VacancyService.getVacancy();
    vacancy.splice(index, 1)
  }
}
