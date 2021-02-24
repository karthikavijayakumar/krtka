import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm = this.fb.group({
    acno: ["", [Validators.required]],
    balance: ["", [Validators.required]],
    username: ["", [Validators.required]]
  });

  constructor(private fb: FormBuilder, private bankService: BankService) {
    bankService.getProfile()
      .subscribe((data: any) => {
        this.profileForm.patchValue({
          acno: data.acno,
          balance: data.balance,
          username: data.username
        })

      });
  }
 ngOnInit(): void{

 }
}
