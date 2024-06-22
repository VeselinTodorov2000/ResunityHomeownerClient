import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Homeowner } from '../models/homeowner';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly http: HttpClient) {}

  login(username: string, password: string): Observable<Homeowner> {
    const httpParams = new HttpParams()
      .append('username', username)
      .append('password', password);
    return this.http.get<Homeowner>(`${environment.baseUrl}/homeowners/login`, {params: httpParams});
  }
}
