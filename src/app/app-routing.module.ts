import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { LoginComponent } from './components/login/login.component';
import { XYZComponent } from './xyz/xyz.component';

const routes: Routes = [
  {path: "", component: XYZComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: AlertsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
