import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HistoryService} from "./history.service";
import {environment} from "../../environments/environment";
import {AnalysisRes, EntityexResult} from "../model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SentanService {

  private readonly sentanApiUrl =environment.sentanApi

  constructor(private httpClient: HttpClient,private historyservice:HistoryService) { }

  analyse(text: string, lang:string): Observable<AnalysisRes> {
    let token=localStorage.getItem('token');
    let url = `${this.sentanApiUrl}/?lang=${lang}&text=${text}&token=${token}`;
    let method = 'GET'

    this.historyservice.putRequest(url,method)

    return this.httpClient.get<AnalysisRes>(url)
  }
}
