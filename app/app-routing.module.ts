import { HomeUserComponent } from './home_User/home_User.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RegisterUserComponent } from './register_User/register_User.component';
import { LoginUserComponent } from './login_User/login_User.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { ShowRequestComponent } from './show-request/show-request.component';
import { AcceptrequestComponent } from './acceptrequest/acceptrequest.component';


const routes: Routes = [
  {path:'', redirectTo: '/loginUser', pathMatch: 'full'},
  {path:'loginUser', component: LoginUserComponent},
  {path:'registerUser', component: RegisterUserComponent},
  {path:'homeUser', component: HomeUserComponent},
  {path:'logout', component: LogoutComponent},
  {path:'homeUser/show-requests', component:ShowRequestComponent},
  {path:'homeUser/show-requests/acceptrequest', component: AcceptrequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }