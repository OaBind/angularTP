import {RouterModule, Routes} from '@angular/router';
import {AdminHomeComponent} from './components/admin-home/admin-home.component';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent
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
