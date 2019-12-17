import {HttpHeaders} from '@angular/common/http';

export const environment = {
  production: false,
  connectionURL: 'http://backend:8081/api',
  header: new HttpHeaders({'Content-Type': 'application/json'})
};
