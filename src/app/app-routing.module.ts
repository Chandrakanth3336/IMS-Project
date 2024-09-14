import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthGuard } from './services/guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { CreateStudentsComponent } from './components/create-students/create-students.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { CanDeactivateGuard } from './services/guards/can-deactivate.guard';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent, canActivate:[AuthGuard], children:[
    {path:"home",component:HomeComponent},
    {path:"create-students",component:CreateStudentsComponent,canDeactivate:[CanDeactivateGuard]},
    {path:"all-students",component:AllStudentsComponent}
  ]},
  {path:"",component:LoginComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
