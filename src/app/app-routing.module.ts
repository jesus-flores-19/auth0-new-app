import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PreciosComponent } from './componentes/precios/precios.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "precios", component: PreciosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
