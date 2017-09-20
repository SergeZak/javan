import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { Consts } from './app.const';

// third party libraries
// import { OwlModule } from 'ng2-owl-carousel';
import { ScrollToModule } from 'ng2-scroll-to';


//import services

import { SlideMenuConfigService } from './services/slide-menu-config.service';
import { VideoApiService } from './services/video-api.service';


import { AppComponent } from './components/main/app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SlideMenuComponent } from './components/slide-menu/slide-menu.component';
import { MovieViewComponent } from './components/movies/movie-view/movie-view.component';
import { SeriesComponent } from './components/series/series.component';
import { ViewSeriesComponent } from './components/series/view-series/view-series.component';
import { SeriesIntroComponent } from './components/series/series-intro/series-intro.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { LiveTvComponent } from './components/live-tv/live-tv.component';
import {MovieService} from "./services/movie.service";
import {SeriesService} from "./services/series.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MoviesComponent,
    SlideMenuComponent,
    MovieViewComponent,
    SeriesComponent,
    ViewSeriesComponent,
    SeriesIntroComponent,
    TvShowsComponent,
    LiveTvComponent

  ],
  imports: [
    // OwlModule,
    ScrollToModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot(appRoutes),
  ],

  providers: [
    SlideMenuConfigService,
    VideoApiService,
    Consts,
    MovieService,
    SeriesService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
