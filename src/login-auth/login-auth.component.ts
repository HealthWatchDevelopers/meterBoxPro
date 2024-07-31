import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from '../modules/components/userProfile/reset-password/reset-password.component';

@Component({
  selector: 'app-login-auth',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule,ResetPasswordComponent],
  templateUrl: './login-auth.component.html',
  styleUrl: './login-auth.component.scss'
})
export class LoginAuthComponent implements OnInit {

login:boolean = true;

resetsubmit:boolean = false;

resetpassword:boolean = false;

constructor(){}

ngOnInit(): void {
  
}


}
