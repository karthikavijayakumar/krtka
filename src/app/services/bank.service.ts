import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  accountDetails: any = {

    userone: { acno: 1000, name: "ajay", balance: 1000, username: "userone", password: "testuser",history:[] },
    usertwo: { acno: 1001, name: "sajay", balance: 20000, username: "usertwo", password: "testuser1",history:[] },
    userthree: { acno: 1002, name: "vijay", balance: 25000, username: "userthree", password: "testuser2" ,history:[]},


  }
  authenticateUser = (uname: string, pwd: string) => {
    let dataset = this.accountDetails

    if (uname in dataset) {
      if (dataset[uname].password == pwd) {
        return 1; //valid user password
      }
      else {
        return 0; //incorrect password
      }
    }
    else {
      return -1; //no user exist
    }


  }

  deposit = (uname: string, pwd: string, amt: number) => {
    let user = this.authenticateUser(uname, pwd)
    let dataset = this.accountDetails;
    if (user == 1) {

      dataset[uname].balance += amt;
      dataset[uname].history.push({
        amount:amt, typeOfTransaction:'credit',

      });
      alert("your account credited with amount" + amt + "avail bal=" + dataset[uname].balance)


    }
    else if (user == 0) {
      alert("incorrect password")

    }
    else if (user == -1) {
      alert("no user exist with provided username")

    }


  }
  withdraw = (uname: string, pwd: string, amt: number) => {
    let user = this.authenticateUser(uname, pwd)
    let dataset = this.accountDetails;
    if (user == 1) {
      if (dataset[uname].balance < amt) {
        alert("insufficient balance")
      }
      else {

        dataset[uname].balance -= amt;
        dataset[uname].history.push({
          amount:amt, typeOfTransaction:'debit',
  
        });
        alert("your account debited with amount" + amt + "avail bal=" + dataset[uname].balance)
      }

    }
    else if (user == 0) {
      alert("incorrect password")

    }
    else if (user == -1) {
      alert("no user exist with provided username")

    }

    
  }
  getHistory(){
    let dataset=this.accountDetails;
    return dataset["userone"].history;
  }
}



