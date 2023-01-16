import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateCompanyComponent} from "./components/create-company/create-company.component";
import {DetailedCompanyComponent} from "./components/detailed-company/detailed-company.component";
import {CompaniesListComponent} from "./components/companies-list/companies-list.component";
import {AuthComponent} from "./components/auth/auth.component";
import {BaseComponent} from "./components/base/base.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {RegisterFormComponent} from "./components/register-form/register-form.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'companies', component: CompaniesListComponent},
  {path: 'company/:id', component: DetailedCompanyComponent},
  {path: 'createCompany', component: CreateCompanyComponent},

  {path: '**', redirectTo: '', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
