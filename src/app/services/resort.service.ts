import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Turnus} from '../model/turnus';
import {Room} from '../model/room';

@Injectable({
  providedIn: 'root'
})
export class ResortService {

  private static readonly resortServiceUrl: string = '/resort';

  constructor(private http: HttpClient) {
  }

  getTurnusYears(): Observable<number[]> {
    const url = environment.connectionURL + ResortService.resortServiceUrl + '/get-turnus-years';
    return this.http.get<number[]>(url);
  }

  getAllTurnusInYear(year: number): Observable<Turnus[]> {
    const url = environment.connectionURL + ResortService.resortServiceUrl + '/get-all-turnus-in-year';
    const options = {params: new HttpParams().set('year', year.toString())};
    return this.http.get<Turnus[]>(url, options);
  }

  getAvailableRoomsToTurnus(selectedTurnus: Turnus): Observable<Room[]> {
    const url = environment.connectionURL + ResortService.resortServiceUrl + '/get-avaiable-rooms';
    return this.http.post<Room[]>(url, selectedTurnus);
  }
}
