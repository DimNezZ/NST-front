import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVacancyComponent } from './list-vacancy.component';

describe('ListVacancyComponent', () => {
  let component: ListVacancyComponent;
  let fixture: ComponentFixture<ListVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVacancyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
