import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrl: './side-nav-bar.component.scss'
})
export class SideNavBarComponent implements OnInit {
  collapsed: boolean = false;



  sidenavbar: any = [];

  constructor() { }

  ngOnInit(): void {


    this.sidenavbar = [
      {
        id: 1,
        priority: 1,
        title: 'Birthdays',
        routerLink: '/Meterbox/Birthday',
        icon: 'ri-cake-2-line',
        children: []
      },
      {
        id: 2,
        priority: 2,
        title: 'Employee Handbook',
        routerLink: '/Meterbox/Birthday',       
        icon: 'ri-contacts-book-3-line',
        children: []
      },
      {
        id: 3,
        priority: 3,
        title: 'Memos',
        routerLink: '/Meterbox/Birthday',
        icon: 'ri-file-edit-line',      
          
        children: []
      },
      {
        id: 4,
        priority: 4,
        title: 'IT Policy',
        routerLink: '/Meterbox/Birthday',
        icon: 'bi bi-file-earmark-check-fill',      
          
        children: []
      },
      {
        id: 5,
        priority: 5,
        title: 'HW Pulse',
        routerLink: '/Meterbox/Birthday',
        icon: 'bi bi-file-earmark-ppt',     
          
        children: []
      },
      {
        id: 6,
        priority: 6,
        title: 'Payslips',
        routerLink: '/Meterbox/Birthday',
        icon: 'ri-file-list-3-line',     
          
        children: []
      },


    ]


  }



}
