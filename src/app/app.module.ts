import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { AuthComponent } from './components/auth/auth.component';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';
import { DetailedCompanyComponent } from './components/detailed-company/detailed-company.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    AuthComponent,
    CompaniesListComponent,
    DetailedCompanyComponent,
    CreateCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
