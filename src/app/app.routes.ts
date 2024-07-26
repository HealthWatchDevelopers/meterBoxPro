import { Routes } from '@angular/router';
import { LoginAuthComponent } from '../login-auth/login-auth.component';

export const routes: Routes = [
    {
        path: '',
        component:LoginAuthComponent  
    },
    {
        path:'Meterbox',
        loadChildren:()=>
        import('../modules/navBar/nav-bar-mod/nav-bar-mod.module').then((x)=>x.NavBarModModule)
    }
];
