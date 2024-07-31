import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header-nav-bar',
  templateUrl: './header-nav-bar.component.html',
  styleUrl: './header-nav-bar.component.scss'
})
export class HeaderNavBarComponent implements OnInit {


  headerNavData: any = [];


  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.navbarHeader();
  }



  navbarHeader() {

    this.headerNavData = [
      { id: 1, title: 'Dashboard', routerPath: '/Meterbox', priority: 1, active: true },
      { id: 2, title: 'My Roster', routerPath: '/Meterbox', priority: 2, active: false },
      { id: 3, title: 'My Attendance', routerPath: '/Meterbox', priority: 3, active: false },
      { id: 4, title: 'My Leave', routerPath: '/Meterbox', priority: 4, active: false }
    ];

  }



  navigateDate(title: string) {
    this.headerNavData = this.headerNavData.map((item: any) => {
      return {
        ...item,
        active: item.title === title
      };
    });
  }

}
