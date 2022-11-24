import { Component, OnInit } from '@angular/core';
import {TextsimService} from "../../services/textsim.service";

@Component({
  selector: 'app-textsim',
  templateUrl: './textsim.component.html',
  styleUrls: ['./textsim.component.css']
})
export class TextsimComponent implements OnInit {

  textone:string = ""
  texttwo:string = ""
  similarity:string = ""
  similarityPercent:number=0

  constructor(private textsimservice:TextsimService) { }

  ngOnInit(): void {}

  checkSimilarity():void {
    if(this.textone!='' && this.texttwo!='') {
      this.textsimservice.returnResult(this.textone, this.texttwo).subscribe((result) => {
        this.similarity = result.similarity.toString()
        this.similarityPercent = Math.round(result.similarity * 100)
      })
    }else alert("Please enter two texts for testing.")
  }
}
