import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SimilarityRes} from "../model";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class TextsimService {

  private readonly textsimApiUrl =environment.textsimApi

  constructor(private httpClient: HttpClient,private historyservice:HistoryService) {}

  returnResult(textone: string, texttwo: string) : Observable<SimilarityRes> {
      let token=localStorage.getItem('token');
      let url = `${this.textsimApiUrl}/?text1=${textone}&text2=${texttwo}&token=${token}&lang=en`;
      let method = 'GET'

      this.historyservice.putRequest(url,method)

      return this.httpClient.get<SimilarityRes>(url)
  }
}
