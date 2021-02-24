import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Username="";
  // Password="";
  // Amount:number=0;
  homeForm=this.fb.group({
    UserName:[""],
    password:[""],
    amount:[0]
  })

  constructor(private bankService:BankService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // onUsernameChange(event:any){
  //   this.Username=event.target.value;

  // }
  // onPasswordChange(event:any){
  //   this.Password=event.target.value;
    
  // }
  // onAmountChange(event:any){
  //   this.Amount=parseInt(event.target.value);
    
  // }
  deposit(){
    // const UserName=this.homeForm.value.UserName;
    // const password=this.homeForm.value.password;
    const amount=parseInt(this.homeForm.value.amount);
  
    this.bankService.deposit(amount)
    .subscribe((data:any)=>{
      alert(data.message);
    });
    this.router.navigateByUrl("/history");

  }
  withdraw(){
  //   const UserName=this.homeForm.value.UserName;
  //   const password=this.homeForm.value.password;
    const amount=parseInt(this.homeForm.value.amount);
  //   alert(UserName);
  //   alert(password);
    this.bankService.withdraw(amount)
    .subscribe((data:any)=>{
      alert(data.message);
    });
    this.router.navigateByUrl("/history");
    

  }

}
