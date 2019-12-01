import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, Subject} from 'rxjs';
import {Post} from '../model/post';
import {Turnus} from '../model/turnus';
import {Message} from '../model/message';
import {User} from '../model/user';
import {NewBooking} from '../model/new-booking';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private static readonly urlGetAllTurnus = '/turnus/all-turnus';
  private static readonly urlPostAddNewBooking = '/booking/add-new-booking';

  private eventChangeAllTurnus: Subject<Turnus[]> = new Subject();

  constructor(private http: HttpClient) {
  }

  public emitAllTurnus(): Observable<Turnus[]> {
    return this.eventChangeAllTurnus.asObservable();
  }

  // public callGetAllTurnus() {
  //   const url = environment.connectionURL + BookingService.urlGetAllTurnus;
  //   this.http.get<Turnus[]>(url).subscribe((data) => {
  //     this.eventChangeAllTurnus.next(data);
  //   });
  // }

  public callGetAllTurnus() {
    const url = environment.connectionURL + BookingService.urlGetAllTurnus;
    return this.http.get<Turnus[]>(url);
  }

  public callAddNewBooking(booking: NewBooking) {
    const url = environment.connectionURL + BookingService.urlPostAddNewBooking;
    this.http.post<User>(url, booking, {headers: environment.header}).subscribe((data) => {
      console.log(data);
    });
  }
}
