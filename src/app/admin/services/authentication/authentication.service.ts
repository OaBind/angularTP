import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ConstantesService} from '../../../core/services/constantes/constantes.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,
              private constantesService: ConstantesService) {

  }

  isUserAuthenticated() {
    return new Observable<boolean>((observer) => {
      observer.next(true);
    });
  }

  isUserAuthenticatedRest(firstname, lastname) {
    let resultat = false;
    this.http.get('http://localhost:3000/users').subscribe(result => {
      result.map(user => {
        if(user.lastname === lastname && user.firstname === firstname) {
          resultat = user.isAdmin;
        }
      });
    });

    return new Observable<boolean>((observ) => {
      observ.next(resultat);
    });
  }

  isUserAuthenticatedThree() {
    return this.http.get(this.constantesService.getAPIRoute('USERS'));

  }
}

