import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Building } from '../models/building';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BuildingsService {
  constructor(private readonly http: HttpClient) {}
  private apiUrl = '/api';

  getBuildingDetails(id: string): Observable<Building> {
    return this.http.get<Building>(`${this.apiUrl}/buildings/${id}`);
  }
}
