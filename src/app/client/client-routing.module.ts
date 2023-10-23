import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  {
    path : '',
    component: ClientComponent,
    children : [
      {
        path : '', component:ClientHomeComponent,
      },
      {
        path: 'bookList', // Corrected path definition
        component: BookListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
