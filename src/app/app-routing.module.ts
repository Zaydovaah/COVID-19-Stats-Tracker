import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { GlobalCasesComponent } from './components/global-cases/global-cases.component';


const routes: Routes = [
  {path: '', component: NavComponent},

  { path: 'global-cases', component: GlobalCasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
