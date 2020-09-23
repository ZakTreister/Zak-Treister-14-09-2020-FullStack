import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { WeatherLocation } from '../models/weather-location';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http: HttpClient) { }
 
  public getFavorites() {
    return this.http.get<WeatherLocation[]>(`${environment.serverUrl}/Favorites`)
  }

  public addToFavorites(key: string, localizedName: string) {
    return this.http.post<any>(`${environment.serverUrl}/AddToFavorites`, { key, localizedName })
  }

  public deleteFavorite(id: any) {
    return this.http.delete<any>(`${environment.serverUrl}/DeleteFavorite`, { params: { id } })
  }
}
