import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ClientRoutingModule } from './client/client-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { NavbarComponent } from './client/navbar/navbar.component';
import { BookListComponent } from './client/book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientHomeComponent,
    AdminComponent,
    AdminHomeComponent,
    NavbarComponent,
    BookListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientRoutingModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
