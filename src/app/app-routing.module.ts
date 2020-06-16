import { TodoViewModuleComponent } from './todo-view-module/todo-view-module.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/Todo', pathMatch: 'full'},
  {path: 'Todo', component: TodoViewModuleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
