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
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AllBookComponent } from './admin/all-book/all-book.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';




@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientHomeComponent,
    AdminComponent,
    AdminHomeComponent,
    NavbarComponent,
    BookListComponent,
    SidebarComponent,
    AllBookComponent,
    AdminHeaderComponent,
    DashboardComponent,
    AdminUserComponent,
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
