import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrl: './birthday.component.scss',
  providers: [DatePipe]
})
export class BirthdayComponent implements OnInit {

  rangeDates: any;

  fromDate: any;
  toDate: any;

  datetypes: any = [
    { value: 'Today', label: 'Today', active: true },
    { value: 'Yesterday', label: 'Yesterday', active: false },
    { value: 'ThisMonth', label: 'This Month', active: false },
    { value: 'DateRange', label: 'Date Range', active: false },
  ]
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {

  }

  navigateDate(datetype: string) {
    this.datetypes = this.datetypes.map((item: any) => {
      return {
        ...item,
        active: item.value === datetype
      };
    });
  }


  onChange() {
    console.log(this.rangeDates);
    this.extractDates(this.rangeDates);
  }

  extractDates(dateRange: any) {

    const startDate = new Date(dateRange[0]);
    this.fromDate = this.datePipe.transform(startDate, 'dd MMMM yyyy') || '';
    
    console.log(dateRange[1]);
    const endDate = dateRange[1]? new Date(dateRange[1]):'';
    this.toDate = this.datePipe.transform(endDate, 'dd MMMM yyyy') || '';

    console.log('From Date:', this.fromDate, 'to Date:', this.toDate);

  }

  fromtodatereturn(): string {

    let val = this.rangeDates == undefined? '': 'Showing ';
    if(val == null || val == '') return val;
    val += this.fromDate;

    if (this.fromDate != this.toDate && this.toDate != '') {
      val += ' to ' + this.toDate;
    }
    return val;
  }


}
