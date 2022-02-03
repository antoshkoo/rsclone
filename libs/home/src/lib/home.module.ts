import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { Route, RouterModule } from '@angular/router';
import { TopMovieComponent } from './top-movie/top-movie.component';
import { NgxPaginationModule } from 'ngx-pagination';

const homeRoutes: Route[] = [
  { path: '', component: HomePageComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    NgxPaginationModule,
  ],
  declarations: [
    HomePageComponent,
    TopMovieComponent
  ],
  exports: [
    HomePageComponent,
    TopMovieComponent
  ],
})
export class HomeModule {}
