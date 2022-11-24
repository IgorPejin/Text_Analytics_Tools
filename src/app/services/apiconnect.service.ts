import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiconnectService {

  private tokenFlag:boolean;

  constructor() {
    this.tokenFlag=false
  }

  changeFlag(tokenFlag: boolean) {
    this.tokenFlag=!tokenFlag
  }

  getTokenFlag() : boolean{
    return this.tokenFlag
  }

}
