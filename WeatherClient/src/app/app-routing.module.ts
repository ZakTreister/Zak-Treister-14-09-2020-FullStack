import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SearchComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
