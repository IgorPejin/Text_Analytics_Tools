import { Component, OnInit } from '@angular/core';
import {LangdetService} from "../../services/langdet.service";
import {Language} from "../../model";

@Component({
  selector: 'app-langdet',
  templateUrl: './langdet.component.html',
  styleUrls: ['./langdet.component.css']
})
export class LangdetComponent implements OnInit {

  text:String = ''

  languages:Language[] = []
  clear:boolean = false

  constructor(private langdetservice:LangdetService) { }

  ngOnInit(): void {
  }

  detectLanguage() {
    if(this.text!='')
    {
      console.log(this.clear)
      this.langdetservice.returnLanguages(this.text,this.clear).subscribe((result)=>{
        this.languages= result.detectedLangs;
      })
    }else alert("Please input some text for language detection.")
  }

  clearCheck() {
    this.clear=!this.clear
  }
}
