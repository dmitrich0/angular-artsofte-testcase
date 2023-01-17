import {Component, Input} from '@angular/core';
import {ICompany} from "../../models/company";
import {CompaniesService} from "../../services/companies.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent {
  @Input() company: ICompany;

  constructor(public companiesService: CompaniesService,
              private router: Router) {
  }

  openFull() {
    this.router.navigate(['/company'], {queryParams: {id:this.company.id}});
  }
}
