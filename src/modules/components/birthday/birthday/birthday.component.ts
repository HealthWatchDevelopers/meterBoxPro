import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrl: './birthday.component.scss',
  providers: [DatePipe]
})
export class BirthdayComponent implements OnInit,AfterViewInit  {

  rangeDates: any;
  imagename: any = 'assets/images/userProfile/profile-img.jpg';
  fromDate: any;
  toDate: any;

  datetypes: any = [
    { value: 'Today', label: 'Today', active: true },
    { value: 'Yesterday', label: 'Yesterday', active: false },
    { value: 'ThisMonth', label: 'This Month', active: false },
    { value: 'DateRange', label: 'Date Range', active: false },
  ]


  datavalues: any = [];

  getdatetype: string = '';

  constructor(private datePipe: DatePipe) { }

  

  ngOnInit(): void {

   

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeHiSlide();      
    }, 100);
  }

  initializeHiSlide(): void {

    // const swiper = new Swiper('.swiper', {
    //   // ...
    // });
    // swiper.on('slideChange', function () {
    //   console.log('slide changed');
    // });

    
    $('.slide').hiSlide();  
  }

  navigateDate(datetype: string) {

    this.getdatetype = datetype;
    this.datetypes = this.datetypes.map((item: any) => {
      return {
        ...item,
        active: item.value === datetype
      };
    });


    if (datetype != 'DateRange') {
      setTimeout(() => {
        this.initializeHiSlide();
      }, 100);
    }


  }

  
  onSwiper([swiper]:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  onChange() {
    console.log(this.rangeDates);
    this.extractDates(this.rangeDates);
  }

  extractDates(dateRange: any) {

    const startDate = new Date(dateRange[0]);
    this.fromDate = this.datePipe.transform(startDate, 'dd MMMM yyyy') || '';

    console.log(dateRange[1]);
    const endDate = dateRange[1] ? new Date(dateRange[1]) : '';
    this.toDate = this.datePipe.transform(endDate, 'dd MMMM yyyy') || '';

    console.log('From Date:', this.fromDate, 'to Date:', this.toDate);

  }

  fromtodatereturn(): string {

    let val = this.rangeDates == undefined || this.rangeDates == '' ? '' : 'Showing ';
    if (val == null || val == '') {
      return val;
    }
    val += this.fromDate;

    if (this.fromDate != this.toDate && this.toDate != '') {
      val += ' to ' + this.toDate;
    }

    if (val != '' && val != null) {
      this.daterangedatas();
    }

    return val;
  }



  resetfromdate() {
    this.rangeDates = '';
    this.fromtodatereturn();
  }


  daterangedatas() {
    this.datavalues = [
      {
        id: 1,
        dob: '10 July',
        userName: 'Developer 1',
        location: 'Chennai',
        sendwishes: false,
        image: 'assets/images/userProfile/profile-img.jpg'
      },
      {
        id: 2,
        dob: '10 July',
        userName: 'Developer 2',
        location: 'Chennai',
        sendwishes: false,
        image: 'assets/images/userProfile/profile-img.jpg'
      },
      {
        id: 3,
        dob: '10 July',
        userName: 'Developer 3',
        location: 'Chennai',
        sendwishes: true,
        image: 'assets/images/userProfile/profile-img.jpg'
      },
      {
        id: 4,
        dob: '10 July',
        userName: 'Developer 4',
        location: 'Chennai',
        sendwishes: false,
        image: 'assets/images/userProfile/profile-img.jpg'
      },
      {
        id: 5,
        dob: '10 July',
        userName: 'Developer 5',
        location: 'Chennai',
        sendwishes: true,
        image: 'assets/images/userProfile/profile-img.jpg'
      },
      {
        id: 6,
        dob: '10 July',
        userName: 'Developer 6',
        location: 'Chennai',
        sendwishes: false,
        image: 'assets/images/userProfile/profile-img.jpg'
      },
      {
        id: 7,
        dob: '10 July',
        userName: 'Developer 7',
        location: 'Chennai',
        sendwishes: false,
        image: 'assets/images/userProfile/profile-img.jpg'
      },
      {
        id: 8,
        dob: '10 July',
        userName: 'Developer 8',
        location: 'Chennai',
        sendwishes: false,
        image: 'assets/images/userProfile/profile-img.jpg'
      },
      {
        id: 9,
        dob: '10 July',
        userName: 'Developer 9',
        location: 'Chennai',
        sendwishes: false,
        image: 'assets/images/userProfile/profile-img.jpg'
      }
    ];


  }

}
