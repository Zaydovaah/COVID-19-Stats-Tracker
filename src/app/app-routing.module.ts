import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GlobalCasesComponent } from './components/global-cases/global-cases.component';
import { NavComponent } from './components/nav/nav.component';


const routes: Routes = [

  { path: '', component: NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
