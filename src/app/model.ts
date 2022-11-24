export interface SimilarityRes {
  timestamp: string,
  time: number,
  lang: string,
  langConfidence:number,
  text1:string,
  text2:string,
  similarity: number
}

export interface Language {
  lang:string,
  confidence:number
}

export interface LangdetResponse {
  timestamp: string,
  time: number,
  text: string,
  detectedLangs: Language[]
}

export interface Image{
  full:string,
  thumbnail:string
}

export interface Anotations{
  id:number,
  title:string,
  uri:string,
  label:string,
  confidence:number,
  spot:string,
  start:number,
  end:number,
  categories:string[]
  abstract:string,
  image:Image
}

export interface EntityexResult{
  timestamp: string,
  time: number,
  lang: string,
  langConfidence:number,
  text:string,
  annotations:Anotations[]
}

export interface Sentiment {
    score:number,
    type:string
}

export interface AnalysisRes {
  timestamp: string,
  time: number,
  lang: string,
  text:string,
  sentiment:Sentiment
}
