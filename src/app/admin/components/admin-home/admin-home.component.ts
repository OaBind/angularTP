import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let firstname = this.activatedRoute.snapshot.paramMap.get('firstname');
    let lastname = this.activatedRoute.snapshot.paramMap.get('lastname');
    if(isNullOrUndefined(firstname) || isNullOrUndefined(lastname)){
      this.router.navigateByUrl('/404');
    }

    this.authenticationService.isUserAuthenticatedRest(
      firstname,
      lastname)
      .subscribe(result => {
      if(result === false) {
        this.router.navigateByUrl('/404');
      }
    });
  }

}
