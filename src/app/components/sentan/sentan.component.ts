import { Component, OnInit } from '@angular/core';
import {SentanService} from "../../services/sentan.service";

@Component({
  selector: 'app-sentan',
  templateUrl: './sentan.component.html',
  styleUrls: ['./sentan.component.css']
})
export class SentanComponent implements OnInit {

  text:string=''
  lang:string='auto'

  score:number=0.0
  type:string='-'

  constructor(private sentanservice:SentanService) { }

  ngOnInit(): void {
  }

  sentAn() {
    function interpolateColor(score: number) {
      let newRed = 255 + (0 - 255) * ((score+1)/2);
      let newGreen =  255 * ((score+1)/2);
        // @ts-ignore
        document.getElementById('type').style.setProperty('--red', newRed.toString())
        // @ts-ignore
        document.getElementById('type').style.setProperty('--green', newGreen.toString())
    }
    if(this.text!='')
    {
      this.sentanservice.analyse(this.text,this.lang).subscribe((result)=>{
        this.score=result.sentiment.score
        this.type=result.sentiment.type
        interpolateColor(this.score);
      })
    }else alert('Please input text for analysis!')
  }
}
