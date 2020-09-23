import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { SearchComponent } from "./pages/search/search.component";
import { FavoritesComponent } from "./pages/favorites/favorites.component";
import { WeatherByCityComponent } from './components/weather-by-city/weather-by-city.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FavoritesComponent,
    WeatherByCityComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
