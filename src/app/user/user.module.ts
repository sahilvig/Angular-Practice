import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListUserComponent, UpdateUserComponent, CreateUserComponent, DeleteUserComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports : [
    ListUserComponent, UpdateUserComponent, CreateUserComponent, DeleteUserComponent
  ]
})
export class UserModule { }
