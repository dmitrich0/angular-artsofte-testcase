import {Component, Input} from '@angular/core';
import {ICompany} from "../../models/company";

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent {
  @Input() company: ICompany;
}
