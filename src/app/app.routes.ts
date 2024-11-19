import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import path from 'path';
import { Component } from '@angular/core';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { ListDepartmentsComponent } from './list-departments/list-departments.component';
import { ListVacancyComponent } from './list-vacancy/list-vacancy.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { ListVisitsComponent } from './list-visits/list-visits.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'listEmployee',
    component: ListEmployeesComponent
  },
  {
    path: 'listDepartments',
    component: ListDepartmentsComponent
  },
  {
    path: 'listEvents',
    component: ListEventsComponent
  },
  {
    path: 'listVacancy',
    component: ListVacancyComponent
  },
  {
    path: 'listVisits',
    component: ListVisitsComponent
  },
];
