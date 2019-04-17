import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public static readonly TOKEN_KEY = 'TOKEN';

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  public addToken(token: string) {
    const currentToken = this.storage.get(LocalStorageService.TOKEN_KEY);
    if (currentToken === null) {
      console.log('új token beállítása');
      this.storage.set(LocalStorageService.TOKEN_KEY, token);
    } else {
      console.log('régi token frissítése');
    }
  }

}
