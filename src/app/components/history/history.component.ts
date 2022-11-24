import { Component, OnInit } from '@angular/core';
import {HistoryService} from "../../services/history.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  requests:String[] =[]

  constructor(private historyservice:HistoryService) {
    this.requests=historyservice.getHistory();
  }

  ngOnInit(): void {
  }

}
