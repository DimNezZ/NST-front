import { Injectable } from '@angular/core';

export interface Vacancy {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private vacancies: Vacancy[] = [];

  getVacancy() {
    return this.vacancies
  }

  addVacancy(vacancy: Vacancy) {
    return this.vacancies.push(vacancy);
  }
}
