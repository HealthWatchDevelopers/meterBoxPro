import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {

  Onboardingdocuments: boolean = false;

  documentdata: any = [];
  documentdetails: any = [];

  ngOnInit(): void {
    this.getdatas();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  getdatas() {
    this.documentdata = [
      { id: 1, fileName: 'Onboarding documents', status: 'Completed' },
      { id: 2, fileName: 'Government identity cards', status: 'Pending' },
      { id: 3, fileName: 'Joining and appointment letters', status: 'Completed' },
      { id: 4, fileName: 'Appraisal and promotion letters', status: 'Pending' },
      { id: 5, fileName: 'Certificates and commendation letters', status: 'Completed' },
    ];

    this.documentdetails=[
      {id:1, fileName:'Experience Letter', colletedDate:'1 January 2022', fileSize:'1 MB'},
      {id:2, fileName:'Salary slips', colletedDate:'2 January 2022', fileSize:'2 MB'},
      {id:3, fileName:'Employee ID Card', colletedDate:'3 January 2022', fileSize:'3 MB'},
      {id:4, fileName:'Contract', colletedDate:'4 January 2022', fileSize:'4 MB'},
      {id:5, fileName:'Performance Evaluation', colletedDate:'4 January 2022', fileSize:'10 MB'}
    ];
  }


}
