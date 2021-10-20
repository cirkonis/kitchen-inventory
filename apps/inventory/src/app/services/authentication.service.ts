import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  async login(email: string, password: string): Promise<boolean> {
    return email === 'mike' && password === 'mike';
  }
}
