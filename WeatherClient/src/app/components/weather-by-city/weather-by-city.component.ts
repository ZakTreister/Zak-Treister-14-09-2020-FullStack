import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FavoritesService } from 'src/app/@services/favorites.service';
import { WeatherService } from 'src/app/@services/weather.service';
import { LocationCurrentWeather } from 'src/app/models/location-current-weather';
import { WeatherLocation } from 'src/app/models/weather-location';

@Component({
  selector: 'app-weather-by-city',
  templateUrl: './weather-by-city.component.html',
  styleUrls: ['./weather-by-city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherByCityComponent implements OnInit {

  @Input() public cities: any[];
  @Output() public favoriteToggled: EventEmitter<LocationCurrentWeather> = new EventEmitter<LocationCurrentWeather>();

  public cityWeather: LocationCurrentWeather;

  constructor(private weatherService: WeatherService,
    private favoritesService: FavoritesService,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public getCurrentWeather(city: WeatherLocation) {
    this.weatherService.getCurrentWeather(city.key).subscribe(res => {
      this.cityWeather = res;
      this.cityWeather.localizedName = city.localizedName;
      this.cd.detectChanges()
    })
  }

  public handleFavoriteToggled(cityWeather: LocationCurrentWeather) {
    this.favoriteToggled.emit(cityWeather);
  }
}
