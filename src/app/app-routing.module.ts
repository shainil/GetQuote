import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SymbolComponent} from './symbol/symbol.component';

const routes: Routes = [
  {path:'symbol',component:SymbolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
