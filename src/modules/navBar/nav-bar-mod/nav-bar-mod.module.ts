import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarModRoutingModule } from './nav-bar-mod-routing.module';
import { HeaderNavBarComponent } from '../header-nav-bar/header-nav-bar.component';
import { FullScreenComponent } from '../full-screen/full-screen.component';
import { SideNavBarComponent } from '../side-nav-bar/side-nav-bar.component';
import { BodyComponent } from '../body/body.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardComponent } from '../../components/dashboard/dashboard/dashboard.component';
import { BirthdayComponent } from '../../components/birthday/birthday/birthday.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderNavBarComponent,
    FullScreenComponent,
    SideNavBarComponent,
    BodyComponent,
    DashboardComponent,
    BirthdayComponent
  ],
  imports: [
    CommonModule,
    NavBarModRoutingModule,
    FormsModule,
    
    CalendarModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') })
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class NavBarModModule { }
