import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // test = "hello world";
  // UserName = "";
  // Password = "";

  loginForm = this.fb.group({
    UserName: ["", [Validators.required]],
    password: ["", [Validators.required,Validators.minLength(4)]]
    // password: ["", [Validators.required,Validators.pattern("^(?=[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]]
  })
  constructor(private router: Router, private bankService: BankService, private fb: FormBuilder) {
  }


  // onUserNameChange(event: any) {
  //   this.UserName = event.target.value
  // }
  // onPasswordChange(event: any) {
  //   this.Password = event.target.value
  // }
  login() {
    if (this.loginForm.valid == false) {
      console.log(this.loginForm.get('password')?.errors)

    alert("invalid form")


    }
    else {
      const UserName = this.loginForm.value.UserName;
      const password = this.loginForm.value.password;


     this.bankService.authenticateUser(UserName, password)
      .subscribe((data:any)=>{
        alert(data.message)
        alert(data.token)
        localStorage.setItem("token",data.token);
        // console.log(data)
         this.router.navigateByUrl("/home");
      },(err)=>{
        alert(err.error.message);
        })
      // if (user == 1) {
      //   alert("login successful")
      //   this.router.navigateByUrl("/home");


      // }
      // else if (user == 0) {
      //   alert("incorrect password")

      // }
      // else if (user == -1) {
      //   alert("no user exist with provided username")

      // }

    }


  }


}
