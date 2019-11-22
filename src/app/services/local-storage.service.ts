import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private static readonly TOKEN_KEY = 'TOKEN';

  constructor() {
  }

  public addToken(token: string) {
    const currentToken = localStorage.getItem(LocalStorageService.TOKEN_KEY);
    if (currentToken == null) {
      console.log('új token beállítása');
      localStorage.setItem(LocalStorageService.TOKEN_KEY, token);
    } else {
      throw new Error('Már volt beállítva token!');
    }
  }


  public getToken(): string {
    const result = localStorage.getItem(LocalStorageService.TOKEN_KEY);
    return result ? result : null;
  }

  public updateToken(token: string) {
    console.log('token frissítés!');
    localStorage.setItem(LocalStorageService.TOKEN_KEY, token);
  }

  deleteToken() {
    localStorage.removeItem(LocalStorageService.TOKEN_KEY);
  }

}
