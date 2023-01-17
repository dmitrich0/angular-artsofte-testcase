import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BaseComponent} from './components/base/base.component';
import {AuthComponent} from './components/auth/auth.component';
import {CompaniesListComponent} from './components/companies-list/companies-list.component';
import {DetailedCompanyComponent} from './components/detailed-company/detailed-company.component';
import {CreateCompanyComponent} from './components/create-company/create-company.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AuthFormComponent} from './components/auth-form/auth-form.component';
import {RegisterComponent} from './components/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RegisterFormComponent} from './components/register-form/register-form.component';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    AuthComponent,
    CompaniesListComponent,
    DetailedCompanyComponent,
    CreateCompanyComponent,
    NotFoundComponent,
    AuthFormComponent,
    RegisterComponent,
    RegisterFormComponent,
    CompanyCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
