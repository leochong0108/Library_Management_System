import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AllBookComponent} from './all-book/all-book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminUserComponent } from './admin-user/admin-user.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path:'home', component:AdminHomeComponent
      },
      {
        path:'allbook', component:AllBookComponent
      },
      {
        path:'', component:DashboardComponent
      },
      {
        path:'adminUser', component:AdminUserComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
