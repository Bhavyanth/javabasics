import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }  from './auth/login/login.component';
import { RegisterComponent }  from './auth/register/register.component';
import {BonusparametersaddComponent} from './bonusParametrs/bonusparametersadd/bonusparametersadd.component';
import {BonusparametersviewComponent} from './bonusParametrs/bonusparametersview/bonusparametersview.component';
import {UsermaintenanceComponent} from './usermaintenance/usermaintenance/usermaintenance.component';
import {ProfileComponent} from './usermaintenance/profile/profile.component';
import {UsersComponent} from './usermaintenance/users/users.component';
import {UserhomeComponent} from './usermaintenance/userhome/userhome.component';
import {AuthguardService as AuthGuard} from 'src/app/services/authguard/authguard.service';
import {RolesmaintenanceComponent} from './usermaintenance/roles/rolesmaintenance/rolesmaintenance.component';


const routes: Routes = 
[
 {path:'Login',component:LoginComponent},
 { path: '', redirectTo: '/Login', pathMatch: 'full' },
 { path: 'Register',  component:RegisterComponent},
 { path: 'UserMaintenance',  component:UsermaintenanceComponent, canActivate: [AuthGuard] ,
 children: [
  {
    path: 'Users', // child route path
    component: UsersComponent, 
    canActivate: [AuthGuard]// child route component that the router renders
  },
  {
    path: 'Profile',
    component: ProfileComponent,
    canActivate: [AuthGuard] // another child route component that the router renders
  },
  {
    path: 'Home',
    component: UserhomeComponent,
    canActivate: [AuthGuard] // another child route component that the router renders
  },
  {
    path: 'RolesUpdate',
    component: RolesmaintenanceComponent,
    canActivate: [AuthGuard] // another child route component that the router renders
  },
  {
    path: 'ViewParams',
    component: BonusparametersviewComponent,
    canActivate: [AuthGuard] // another child route component that the router renders
  },
  {
    path: 'AddParams',
    component: BonusparametersaddComponent,
    canActivate: [AuthGuard] // another child route component that the router renders
  },
],
  },
 ]
 
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }