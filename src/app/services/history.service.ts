import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history:String[] = []
  d:Date;

  constructor() {
    this.d = new Date();
  }

  putRequest(url: string, method: string) {
    //https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
    let datestring = "["+("0" + this.d.getDate()).slice(-2) + "-" + ("0"+(this.d.getMonth()+1)).slice(-2) + "-" + this.d.getFullYear() + " " + ("0" + this.d.getHours()).slice(-2) + ":" + ("0" + this.d.getMinutes()).slice(-2)+"]";
    let request= datestring + "          "+method+"          " +url
    this.history.push(request)
  }

  getHistory() {
    return this.history;
  }
}
