import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destination } from './destination';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public getDestinations(): Observable<Destination[]> {
    return this.http.get<any>(`${this.apiServerUrl}/destination/all`);
  }

  public addDestination(destination: Destination): Observable<Destination> {
    return this.http.post<any>(`${this.apiServerUrl}/destination/add`, destination);
  }

  public updateDestination(destination: Destination): Observable<Destination> {
    return this.http.put<any>(`${this.apiServerUrl}/destination/update`, destination);
  }

  public deleteDestination(destinationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/destination/delete/${destinationId}`);
  }
}
