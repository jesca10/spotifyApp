import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService: StorageService) { }

  loginUser(credentials: any) {
    // * [Tarea]: Si el login es exitoso guardar en el storage 'login:true' ✅
    return new Promise((resolve, reject) => {
      if (credentials.email === 'jarol@gmail.com' && credentials.password === 'Qwerty07*') {
        this.storageService.set('loggedIn', true);
        resolve('Login Correcto');
      } else {
        reject('Login Incorrecto');
      }

    });
  }
}
