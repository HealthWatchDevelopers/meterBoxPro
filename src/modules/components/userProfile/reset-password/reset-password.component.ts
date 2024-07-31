import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

  resetscreen: boolean =true;  

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.urlchecker();
  }



  urlchecker(){
    this.resetscreen = this.route.url == '/Meterbox/ResetPassword' ? true:false;    
  }


}
