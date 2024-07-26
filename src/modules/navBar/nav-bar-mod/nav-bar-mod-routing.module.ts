import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../components/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
    // loadComponent:()=>
    // import('../../components/dashboard/dashboard/dashboard.component').then((x)=>x.DashboardComponent)

  },
  {
    path:'Profile',
    loadComponent:()=>
    import('../../components/userProfile/user-profile/user-profile.component').then((x)=>x.UserProfileComponent)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavBarModRoutingModule { }
