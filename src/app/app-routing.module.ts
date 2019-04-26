import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import {AdminRoutingModule} from './admin/admin-routing.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminRoutingModule
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
