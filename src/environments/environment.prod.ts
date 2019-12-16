import {HttpHeaders} from '@angular/common/http';

export const environment = {
  production: false,
  connectionURL: '/api',
  header: new HttpHeaders({'Content-Type': 'application/json'})
};
