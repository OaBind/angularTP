import {NgModule} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import {AuthenticationService} from './services/authentication/authentication.service';
import {FooterComponent} from './components/footer/footer.component';
import {CommonModule} from '@angular/common';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    AdminHomeComponent
  ],
  providers: [
    AuthenticationService
  ]
})

export class AdminModule {}
