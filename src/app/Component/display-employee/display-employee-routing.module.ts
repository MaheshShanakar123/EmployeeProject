import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayEmployeeComponent } from './display-employee.component';

const routes: Routes = [{ path: '', component: DisplayEmployeeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayEmployeeRoutingModule { }
