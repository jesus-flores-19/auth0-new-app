import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PreciosComponent } from './componentes/precios/precios.component';
import { ProtegidaComponent } from './componentes/protegida/protegida.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "precios", component: PreciosComponent},
  {path: "protegida", component: ProtegidaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
