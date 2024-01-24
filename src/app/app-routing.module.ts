import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const loadUsersModule = () => import('./users/users.module').then(m => m.UsersModule) 

const routes: Routes = [
  {path: 'users', loadChildren: loadUsersModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
