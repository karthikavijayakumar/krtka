import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const apiUrl=environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class BankService {
  constructor(private http: HttpClient) { }
  // accountDetails: any = {

  //   userone: { acno: 1000, name: "ajay", balance: 1000, username: "userone", password: "testuser", history: [] },
  //   usertwo: { acno: 1001, name: "sajay", balance: 20000, username: "usertwo", password: "testuser1", history: [] },
  //   userthree: { acno: 1002, name: "vijay", balance: 25000, username: "userthree", password: "testuser2", history: [] },


  // }
  authenticateUser = (uname: string, pwd: string) => {
    return this.http.post(apiUrl+"/login", {
      "UserName": uname,
      "password": pwd

    });


  }
  generateHeader = () => {
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "Bearer "+token)
    return headers;

  }

  deposit = (amt: number) => {

    return this.http.post(apiUrl+"/deposit", {

      "amount": amt
    }, {
      headers: this.generateHeader()

    });
  }
  
  withdraw = (amt: number) => {

    return this.http.post(apiUrl+"/withdraw", {

      "amount": amt
    }, {
      headers: this.generateHeader()

    });
  }

  getHistory() {
    return this.http.get(apiUrl+"/history", {
      headers: this.generateHeader()

    });
  }
  getProfile() {
    return this.http.get(apiUrl+"/profile", {
      headers: this.generateHeader()

    });
    
  }
}
