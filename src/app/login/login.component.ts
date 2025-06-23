import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  loginForm!: FormGroup;


  constructor(private loginFromBuilder: FormBuilder) {}

  ngOnInit(): void {
   this.loginForm = this.loginFromBuilder.group({
      username: [''],
      password: ['']
    });
  }

  login(): void {
  }

  onLogin(): void{

  }

}
