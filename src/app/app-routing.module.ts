import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostComponent } from './componets/lista-post/lista-post.component';
import { FormularioComponent } from './componets/formulario/formulario.component';

const routes: Routes = [
  { path: 'posts', component: ListaPostComponent },
  { path: 'blog/new', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
