import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private route:ActivatedRoute) { 
    this.route.paramMap.subscribe((params:any)=>{
      const userId = params.params.id;
      // bankService.getUsers(userId)
      // .subscribe((data: any) => {
      //   this.profileForm.patchValue({
      //     acno: data.acno,
      //     balance: data.balance,
      //     username: data.username
      //   })

      // });
      
      
    })
  }

  ngOnInit(): void {
  }

}
