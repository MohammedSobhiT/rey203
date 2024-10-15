import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly USERS_KEY = 'users';

  constructor() {}

  signUp(fullName: string, email: string, password: string): boolean {
    const users = this.getUsers();
    if (users.find((u) => u.email === email)) {
      return false; // User already exists
    }
    users.push({ fullName, email, password });
    this.saveUsers(users);
    return true;
  }

  login(email: string, password: string): any {
    const users = this.getUsers();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }
    return null;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }

  private getUsers(): any[] {
    return JSON.parse(localStorage.getItem(this.USERS_KEY) || '[]');
  }

  private saveUsers(users: any[]) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }
}
