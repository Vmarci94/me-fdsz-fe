import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, Subject} from 'rxjs';
import {Post} from '../model/post';
import {Turnus} from '../model/turnus';
import {Message} from '../model/message';
import {User} from '../model/user';
import {NewBooking} from '../model/new-booking';
import {Booking} from '../model/booking';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private static readonly urlGetAllTurnus = '/turnus/all-turnus';
  private static readonly urlPostAddNewBooking = '/booking/add-new-booking';
  private static readonly urlPostAddTurnus = '/turnus/add-new-turnus';
  private static readonly urlGetAlltoCurrentUser = '/booking/all-to-current-user';
  private static readonly urlGetAllBooking = '/booking/all';
  private static readonly urlDeleteBooking = '/booking/delete';
  private static readonly urlDeleteTurnus = '/turnus/delete';

  private eventChangeAllToCurrentUser: Subject<Booking[]> = new Subject();
  private eventChangeAllTurnus: Subject<Turnus[]> = new Subject();
  private eventChangeAllBooking: Subject<Booking[]> = new Subject();

  constructor(private http: HttpClient) {
  }

  public emitAllToCurrentUser(): Observable<Booking[]> {
    return this.eventChangeAllToCurrentUser.asObservable();
  }

  public callGetAllToCurrentUser() {
    const url = environment.connectionURL + BookingService.urlGetAlltoCurrentUser;
    this.http.get<Booking[]>(url).subscribe((data) => {
      this.eventChangeAllToCurrentUser.next(data);
    });
  }

  public emitAllTurnus(): Observable<Turnus[]> {
    return this.eventChangeAllTurnus.asObservable();
  }

  public callGetAllTurnus() {
    const url = environment.connectionURL + BookingService.urlGetAllTurnus;
    this.http.get<Turnus[]>(url).subscribe((data) => {
      this.eventChangeAllTurnus.next(data);
    });
  }


  public emitAllBooking(): Observable<Booking[]> {
    return this.eventChangeAllBooking.asObservable();
  }

  public callGetAllBooking() {
    const url = environment.connectionURL + BookingService.urlGetAllBooking;
    this.http.get<Booking[]>(url).subscribe((data) => {
      this.eventChangeAllBooking.next(data);
    });
  }

  public callAddNewBooking(booking: NewBooking) {
    const url = environment.connectionURL + BookingService.urlPostAddNewBooking;
    this.http.post<User>(url, booking, {headers: environment.header}).subscribe((data) => {
      this.callGetAllToCurrentUser();
      this.callGetAllTurnus();
    });
  }

  public callAddNewTurnus(newTurnus: Turnus) {
    const url = environment.connectionURL + BookingService.urlPostAddTurnus;
    this.http.post<any>(url, newTurnus, {headers: environment.header}).subscribe(() => {
      this.callGetAllTurnus();
    });
  }

  callDeleteBookingById(postId: number) {
    const url = environment.connectionURL + BookingService.urlDeleteBooking;
    const queryParams = new HttpParams()
      .set('bookingId', '' + postId);
    this.http.delete(url, {params: queryParams}).subscribe(() => {
      this.callGetAllToCurrentUser();
      this.callGetAllTurnus();
      this.callGetAllBooking();
    });
  }

  callDeleteTurnusById(turnusId: number) {
    const url = environment.connectionURL + BookingService.urlDeleteTurnus;
    const queryParams = new HttpParams()
      .set('turnusId', '' + turnusId);
    this.http.delete(url, {params: queryParams}).subscribe(() => {
      this.callGetAllTurnus();
      this.callGetAllBooking();
    });
  }
}
