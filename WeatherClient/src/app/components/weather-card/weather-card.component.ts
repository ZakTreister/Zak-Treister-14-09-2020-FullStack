import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FavoritesService } from 'src/app/@services/favorites.service';
import { LocationCurrentWeather } from 'src/app/models/location-current-weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherCardComponent implements OnInit {

  @Input() public cityWeather: LocationCurrentWeather;
  @Output() public favoriteToggled: EventEmitter<LocationCurrentWeather> = new EventEmitter<LocationCurrentWeather>();

  constructor(private favoriteService: FavoritesService,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  toggleFavorite() {
    let obs = this.cityWeather.isFavorite ?
      this.favoriteService.deleteFavorite(this.cityWeather.favoriteId) :
      this.favoriteService.addToFavorites(this.cityWeather.key, this.cityWeather.localizedName);
    obs.subscribe(res => {
      this.cityWeather.isFavorite = !this.cityWeather.isFavorite;
      if (res) {
        this.cityWeather.favoriteId = res.id;
      }
      this.favoriteToggled.emit(this.cityWeather);
      this.cd.markForCheck();
    })
  }
}
