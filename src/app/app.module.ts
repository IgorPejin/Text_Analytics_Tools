import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ApiconnectComponent } from './components/apiconnect/apiconnect.component';
import { EntityexComponent } from './components/entityex/entityex.component';
import { TextsimComponent } from './components/textsim/textsim.component';
import { LangdetComponent } from './components/langdet/langdet.component';
import { SentanComponent } from './components/sentan/sentan.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiconnectComponent,
    EntityexComponent,
    TextsimComponent,
    LangdetComponent,
    SentanComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
