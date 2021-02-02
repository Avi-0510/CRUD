import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './pages/update-employee/update-employee.component';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { UserServiceService} from './user-service.service';
import {employeeTitlePipe} from './pages/create-employee/employeeTitle.pipe';

const routes: Routes = [
  {path: "create" , component: CreateEmployeeComponent},
  {path: "update" , component: UpdateEmployeeComponent},
  {path: "" , redirectTo: '/create' ,pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    employeeTitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
