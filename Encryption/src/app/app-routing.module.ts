import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
const routes: Routes = [
  { path: 'mainPage', component: MainPageComponent },
  { path: '', redirectTo: 'mainPage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
