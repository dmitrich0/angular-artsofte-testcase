import {Component, Input} from '@angular/core';
import {ICompany} from "../../models/company";
import {CompaniesService} from "../../services/companies.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-detailed-company',
  templateUrl: './detailed-company.component.html',
  styleUrls: ['./detailed-company.component.scss']
})
export class DetailedCompanyComponent {
  company: ICompany;
  id: number;

  constructor(public companiesService: CompaniesService,
              private route: ActivatedRoute,
              private authService: AuthService) {
    this.route.queryParams.subscribe(params => this.id = params.id)
    this.company = companiesService.companies.filter(company => company.id == this.id)[0];
  }

  ngOnInit(): void {
    this.authService.checkAuth();
  }
}
