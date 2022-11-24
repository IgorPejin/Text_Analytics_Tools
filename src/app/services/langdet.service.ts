import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {HistoryService} from "./history.service";
import {LangdetResponse} from "../model";

@Injectable({
  providedIn: 'root'
})
export class LangdetService {

  private readonly langdetApiUrl =environment.langdetApi

  constructor(private httpClient: HttpClient,private historyservice:HistoryService) { }

  returnLanguages(text: String, clear:boolean) : Observable<LangdetResponse> {
    let token=localStorage.getItem('token');
    let url = `${this.langdetApiUrl}/?token=${token}&clear=${clear}&text=${text}`;
    let method = 'GET'

    this.historyservice.putRequest(url,method)

    return this.httpClient.get<LangdetResponse>(url)
  }
}
