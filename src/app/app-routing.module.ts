import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  redirectTo: "/displayEmployee",
  pathMatch: 'full'
},
  { path: 'displayEmployee', loadChildren: () => import('./Component/display-employee/display-employee.module').then(m => m.DisplayEmployeeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
