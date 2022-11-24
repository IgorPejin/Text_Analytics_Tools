import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {HistoryService} from "./history.service";
import {EntityexResult} from "../model";

@Injectable({
  providedIn: 'root'
})
export class EntityexService {

  private readonly entityexApiUrl =environment.entityexApi

  constructor(private httpClient: HttpClient,private historyservice:HistoryService) { }

  entityExtract(text:string,min_confidence: number, include: string):Observable<EntityexResult> {
    let token=localStorage.getItem('token');
    let url = `${this.entityexApiUrl}/?text=${text}&include=${include}&min_confidence=${min_confidence}&token=${token}&lang=en`;
    let method = 'GET'

    this.historyservice.putRequest(url,method)

    return this.httpClient.get<EntityexResult>(url)
  }
}
