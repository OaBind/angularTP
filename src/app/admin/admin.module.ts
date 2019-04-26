import {NgModule} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import {AuthenticationService} from './services/authentication/authentication.service';
import {FooterComponent} from './components/footer/footer.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent
  ],
  providers: [
    AuthenticationService
  ]
})

export class AdminModule {}
