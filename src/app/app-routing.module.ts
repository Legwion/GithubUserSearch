import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { UserTableComponent } from './components/user-table/user-table.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'table', component: UserTableComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirección de ruta vacía a '/home'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
