import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  { path: '',   redirectTo: '/todos', pathMatch: 'full' },
  {path: 'todos', component: MasterComponent },
  {path: 'todos/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
