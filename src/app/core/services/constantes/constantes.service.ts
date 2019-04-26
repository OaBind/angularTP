import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {constantes} from './constantes';


@Injectable()
export class ConstantesService {
  getAPIRoute(key: string) {
    return environment.apiurl + constantes[key];
  }
}
