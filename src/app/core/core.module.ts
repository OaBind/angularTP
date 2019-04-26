import {NgModule} from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterModule} from '@angular/router';
import {ConstantesService} from './services/constantes/constantes.service';


@NgModule({
  declarations: [ HomeComponent, NotFoundComponent],
  imports: [RouterModule],
  exports: [],
  providers: [ConstantesService]
})

export class CoreModule {}
