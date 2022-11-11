import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoonComponent } from './moon/moon.component';
import { OhoneComponent } from './ohone/ohone.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"moon",component:MoonComponent},
  {path:"ohone",component:OhoneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
