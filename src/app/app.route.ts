import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieViewComponent } from './components/movies/movie-view/movie-view.component';
import { SeriesComponent } from './components/series/series.component';
import { ViewSeriesComponent } from './components/series/view-series/view-series.component';
import { SeriesIntroComponent } from './components/series/series-intro/series-intro.component';
import { TvShowsComponent } from "app/components/tv-shows/tv-shows.component";
import { LiveTvComponent } from "app/components/live-tv/live-tv.component";

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Home Page' }
    },
    {
        path: 'movies',
        component: MoviesComponent,
        data: { title: 'Movies Page' }
    },
    {
        path: 'movie-view',
        component: MovieViewComponent,
        data: { title: 'Movies Page' }
    },
    {
        path: 'series',
        component: SeriesComponent,
        data: { title: 'Series Page' }
    },
    {
        path: 'view-series',
        component: ViewSeriesComponent,
        data: { title: 'View Series Page' }
    },
    {
        path: 'series-intro',
        component: SeriesIntroComponent,
        data: { title: 'Series Intro Page' }
    }, {
        path: 'tv-shows',
        component: TvShowsComponent,
        data: { title: 'Tv Shows Page' }
    }, {
        path: 'live',
        component: LiveTvComponent,
        data: { title: 'Live TV Page' }
    }
]