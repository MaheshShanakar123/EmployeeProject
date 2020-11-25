import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayEmployeeRoutingModule } from './display-employee-routing.module';
import { DisplayEmployeeComponent } from './display-employee.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DisplayEmployeeComponent],
  imports: [
    CommonModule,
    DisplayEmployeeRoutingModule,
    FormsModule
  ]
})
export class DisplayEmployeeModule { }
