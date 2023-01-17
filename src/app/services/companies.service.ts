import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {ICompany} from "../models/company";
import {Observable, retry, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) {
  }

  companies: ICompany[];

  getAll(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>('https://random-data-api.com/api/company/random_company', {
      params: new HttpParams({
        fromString: 'size=12'
      })
    }).pipe(
      retry(2),
      tap(companies => this.companies = companies)
    )
  }
}
