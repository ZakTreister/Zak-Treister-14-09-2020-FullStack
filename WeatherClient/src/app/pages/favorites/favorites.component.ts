import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LocationCurrentWeather } from 'src/app/models/location-current-weather';
import { WeatherLocation } from 'src/app/models/weather-location';
import { FavoritesService } from "../../@services/favorites.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  public cities: WeatherLocation[];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favoritesService.getFavorites().subscribe(cities => {
      this.cities = cities;
    })
  }

  public favoriteToggled(cityWeather: LocationCurrentWeather) {
    if (cityWeather.isFavorite) {
      this.cities.push({
        key: cityWeather.key,
        localizedName: cityWeather.localizedName
      })
    } else {
      this.cities = this.cities.filter(city => city.key != cityWeather.key)
    }
  }

}
