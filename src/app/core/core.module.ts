import {NgModule} from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [ HomeComponent, NotFoundComponent],
  imports: [RouterModule],
  exports: [],
  providers: []
})

export class CoreModule {}
