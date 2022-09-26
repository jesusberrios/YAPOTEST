import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from '@env';
import {TrackServiceResponse} from '../models/table.model'

@Injectable({
  providedIn: 'root',
})
export class TracksService {
  private readonly apiUrl = environment.api;

  constructor(private http: HttpClient) {}
  getTracks(artistName: any) {
    return this.http.get<TrackServiceResponse>(this.apiUrl, {headers: {name: artistName}});
  }
}