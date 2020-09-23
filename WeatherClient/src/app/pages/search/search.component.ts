import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WeatherService } from '../../@services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public query: string;
  public cities: any[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void { }

  public searchCitiesByQuery() {
    this.weatherService.searchCitiesByQuery(this.query).subscribe(cities => {
      this.cities = cities;
    })
  }

}
