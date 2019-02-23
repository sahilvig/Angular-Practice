import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './user/list-user/list-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';


const routes: Routes = [
  { path: 'add-user', component: CreateUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: UpdateUserComponent },
  {path : 'delete-user', component : DeleteUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
