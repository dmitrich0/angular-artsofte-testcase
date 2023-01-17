import { Component } from '@angular/core';
import {CompaniesService} from "../../services/companies.service";

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent {
  title = 'Компании';
  isLoading = false;
  term = '';

  constructor(
    public companiesService: CompaniesService
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    // this.products$ = this.productsService.getAll().pipe(
    //     tap(() => this.isLoading = false)
    // );
    this.companiesService.getAll().subscribe(() => {
      this.isLoading = false;
    });
  }
}
