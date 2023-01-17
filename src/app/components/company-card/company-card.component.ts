import {Component, Input} from '@angular/core';
import {ICompany} from "../../models/company";
import {CompaniesService} from "../../services/companies.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent {
  @Input() company: ICompany;

  constructor(public companiesService: CompaniesService,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.checkAuth();
    }

  openFull() {
    this.router.navigate(['/company'], {queryParams: {id:this.company.id}});
  }
}
