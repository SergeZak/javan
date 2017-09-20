import { Injectable } from '@angular/core';
import { ResponseContentType, Http, Response } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from "rxjs/Observable";
import { Consts } from '../app.const';
import {VideoApiService} from "./video-api.service";


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';


@Injectable()
export class MovieService {

    public movieList:any = [];


    constructor(public apiService: VideoApiService) {}


    getMovieList()
    {
        if(this.movieList.length > 0)
        {
            return Observable.from([this.movieList]);
        }

        return this.apiService.getAllMovies()
            .map(movies => {
                this.movieList = movies.content;
                return this.movieList;
            });
    }


}
