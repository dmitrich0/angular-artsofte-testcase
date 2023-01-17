import { Component } from '@angular/core';
import {CompaniesService} from "../../services/companies.service";
import {window} from "rxjs";
import {AuthService} from "../../services/auth.service";

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
    public companiesService: CompaniesService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.authService.checkAuth();
    // this.products$ = this.productsService.getAll().pipe(
    //     tap(() => this.isLoading = false)
    // );
    this.companiesService.getAll().subscribe(() => {
      this.isLoading = false;
    });
  }
}
