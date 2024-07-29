import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenComponent } from '../full-screen/full-screen.component';
import { DashboardComponent } from '../../components/dashboard/dashboard/dashboard.component';
import { BirthdayComponent } from '../../components/birthday/birthday/birthday.component';

const routes: Routes = [
  {
    path:'',   
    component:FullScreenComponent,
    children:[
      {
        path:'',
        component: DashboardComponent,    
        // loadChildren:()=>
        //   import('../../components/dashboard/dashboard-mod/dashboard-mod.module').then((x)=>x.DashboardModModule)
      },
      {
        path:'Profile',
        loadComponent:()=>
        import('../../components/userProfile/user-profile/user-profile.component').then((x)=>x.UserProfileComponent)
      },
      {
path:'ResetPassword',
loadComponent:()=>
  import('../../components/userProfile/reset-password/reset-password.component').then((x)=>x.ResetPasswordComponent)
      },
      {
        path:'Birthday',
        component:BirthdayComponent
      }
    ]

  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavBarModRoutingModule { }
