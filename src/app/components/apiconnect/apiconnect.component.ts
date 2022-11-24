import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiconnectService} from "../../services/apiconnect.service";

@Component({
  selector: 'app-apiconnect',
  templateUrl: './apiconnect.component.html',
  styleUrls: ['./apiconnect.component.css']
})
export class ApiconnectComponent implements OnInit {

  token:String ='';
  tokenFlag:boolean;

  constructor(private apiconnservice:ApiconnectService) {
    this.tokenFlag=this.apiconnservice.getTokenFlag()
  }

  ngOnInit(): void {
    // refresh problem, potencijalno resenje
    let token = localStorage.getItem('token')
    if(token!=null)
      this.tokenFlag=true
  }

  setToken():void{
    if(this.token=="")
      alert("Fill out token field!");
    else {
      if (!this.tokenFlag) {
        // @ts-ignore
        localStorage.setItem('token', this.token);
        this.apiconnservice.changeFlag(this.tokenFlag);
        this.tokenFlag = this.apiconnservice.getTokenFlag();
        this.token = ''
      } else if (this.tokenFlag) {
        // @ts-ignore
        localStorage.setItem('token', this.token);
        alert("Token edited successfully");
        this.token = ''
      }
    }
  }
}
