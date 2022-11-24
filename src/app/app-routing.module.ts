import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApiconnectComponent} from "./components/apiconnect/apiconnect.component";
import {EntityexComponent} from "./components/entityex/entityex.component";
import {TextsimComponent} from "./components/textsim/textsim.component";
import {LangdetComponent} from "./components/langdet/langdet.component";
import {SentanComponent} from "./components/sentan/sentan.component";
import {TokenGuard} from "./token.guard";
import {HistoryComponent} from "./components/history/history.component";

const routes: Routes = [
  {
    path:"apiconnect",
    component: ApiconnectComponent
  },
  {
    path:"entityex",
    component: EntityexComponent,
    canActivate:[TokenGuard]
  },
  {
    path:"textsim",
    component: TextsimComponent,
    canActivate:[TokenGuard]
  },
  {
    path:"langdet",
    component: LangdetComponent,
    canActivate:[TokenGuard]
  },
  {
    path:"sentan",
    component: SentanComponent,
    canActivate:[TokenGuard]
  },
  {
    path:"history",
    component: HistoryComponent,
    canActivate:[TokenGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
