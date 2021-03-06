import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { LocationCurrentWeather } from "../models/location-current-weather";
import { WeatherLocation } from "../models/weather-location";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public searchCitiesByQuery(query: string) {
    return this.http.get<WeatherLocation[]>(`${environment.serverUrl}/Search`, { params: { query } })
  }

  public getCurrentWeather(cityKey: string) {
    return this.http.get<LocationCurrentWeather>(`${environment.serverUrl}/GetCurrentWeather`, { params: { cityKey } })
  }
}
// return of([
//   {
//     "Version": 1,
//     "Key": "213225",
//     "Type": "City",
//     "Rank": 30,
//     "LocalizedName": "Jerusalem",
//     "Country": {
//       "ID": "IL",
//       "LocalizedName": "Israel"
//     },
//     "AdministrativeArea": {
//       "ID": "JM",
//       "LocalizedName": "Jerusalem"
//     }
//   },
//   {
//     "Version": 1,
//     "Key": "306735",
//     "Type": "City",
//     "Rank": 42,
//     "LocalizedName": "Jerez de la Frontera",
//     "Country": {
//       "ID": "ES",
//       "LocalizedName": "Spain"
//     },
//     "AdministrativeArea": {
//       "ID": "AN",
//       "LocalizedName": "Andalusia"
//     }
//   },
//   {
//     "Version": 1,
//     "Key": "329548",
//     "Type": "City",
//     "Rank": 45,
//     "LocalizedName": "Jersey City",
//     "Country": {
//       "ID": "US",
//       "LocalizedName": "United States"
//     },
//     "AdministrativeArea": {
//       "ID": "NJ",
//       "LocalizedName": "New Jersey"
//     }
//   },
//   {
//     "Version": 1,
//     "Key": "465",
//     "Type": "City",
//     "Rank": 51,
//     "LocalizedName": "Jeremie",
//     "Country": {
//       "ID": "HT",
//       "LocalizedName": "Haiti"
//     },
//     "AdministrativeArea": {
//       "ID": "GA",
//       "LocalizedName": "Grande Anse"
//     }
//   },
//   {
//     "Version": 1,
//     "Key": "224190",
//     "Type": "City",
//     "Rank": 51,
//     "LocalizedName": "Jerash",
//     "Country": {
//       "ID": "JO",
//       "LocalizedName": "Jordan"
//     },
//     "AdministrativeArea": {
//       "ID": "JA",
//       "LocalizedName": "Jerash"
//     }
//   },
//   {
//     "Version": 1,
//     "Key": "244895",
//     "Type": "City",
//     "Rank": 55,
//     "LocalizedName": "Jerada",
//     "Country": {
//       "ID": "MA",
//       "LocalizedName": "Morocco"
//     },
//     "AdministrativeArea": {
//       "ID": "02",
//       "LocalizedName": "l'Oriental"
//     }
//   },
//   {
//     "Version": 1,
//     "Key": "232887",
//     "Type": "City",
//     "Rank": 55,
//     "LocalizedName": "Jerécuaro",
//     "Country": {
//       "ID": "MX",
//       "LocalizedName": "Mexico"
//     },
//     "AdministrativeArea": {
//       "ID": "GUA",
//       "LocalizedName": "Guanajuato"
//     }
//   },
//   {
//     "Version": 1,
//     "Key": "3558846",
//     "Type": "City",
//     "Rank": 55,
//     "LocalizedName": "Jerez",
//     "Country": {
//       "ID": "MX",
//       "LocalizedName": "Mexico"
//     },
//     "AdministrativeArea": {
//       "ID": "ZAC",
//       "LocalizedName": "Zacatecas"
//     }
//   },
//   {
//     "Version": 1,
//     "Key": "236610",
//     "Type": "City",
//     "Rank": 55,
//     "LocalizedName": "Jerez de García Salinas",
//     "Country": {
//       "ID": "MX",
//       "LocalizedName": "Mexico"
//     },
//     "AdministrativeArea": {
//       "ID": "ZAC",
//       "LocalizedName": "Zacatecas"
//     }
//   },
//   {
//     "Version": 1,
//     "Key": "313422",
//     "Type": "City",
//     "Rank": 65,
//     "LocalizedName": "Jerablus",
//     "Country": {
//       "ID": "SY",
//       "LocalizedName": "Syria"
//     },
//     "AdministrativeArea": {
//       "ID": "HL",
//       "LocalizedName": "Aleppo"
//     }
//   }
// ])