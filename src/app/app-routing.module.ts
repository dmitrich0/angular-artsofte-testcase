import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'companies', component: CompaniesListComponent},
  {path: 'company/:id', component: DetailedCompanyComponent},
  {path: 'createCompany' , component: CreateCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
