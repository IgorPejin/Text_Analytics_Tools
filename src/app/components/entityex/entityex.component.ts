import { Component, OnInit } from '@angular/core';
import {EntityexService} from "../../services/entityex.service";
import {Anotations} from "../../model";

@Component({
  selector: 'app-entityex',
  templateUrl: './entityex.component.html',
  styleUrls: ['./entityex.component.css']
})
export class EntityexComponent implements OnInit {

  text:string = ''
  image:boolean=false
  abstract:boolean=false
  categories:boolean=false
  min_confidence:number=0.6
  includeParam:String[]=[]
  annotations:Anotations[]=[]

  constructor(private entityexservice:EntityexService) { }

  ngOnInit(): void {
  }

  entityExtraction() {
    if(this.text=='')
      alert("Input some text for entity extraction!")
    else
    {
        if(this.image) this.includeParam.push('image')
        if(this.categories) this.includeParam.push('categories')
        if(this.abstract) this.includeParam.push('abstract')
        let include=this.includeParam.toString()
        this.includeParam=[]

      //The doctor says an apple is better than an orange
        this.entityexservice.entityExtract(this.text,this.min_confidence,include).subscribe((result)=>{
          console.log(result)
          this.annotations = result.annotations
        })
    }

  }
}
