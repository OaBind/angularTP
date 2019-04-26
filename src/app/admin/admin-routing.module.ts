import {RouterModule, Routes} from '@angular/router';
import {AdminHomeComponent} from './components/admin-home/admin-home.component';
import {NgModule} from '@angular/core';
import {AuthGuard} from './guard/auth/auth.guard';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [
      AuthGuard
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule { }
