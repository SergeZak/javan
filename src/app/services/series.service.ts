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
export class SeriesService {

    public seriesList:any = [];


    constructor(public apiService: VideoApiService) {}


    getSeriesList()
    {
        return this.apiService.getAllSeries()
            .map(movies => {
                this.seriesList = movies.content;

                this.seriesList.forEach(series => this.getSeriesImage(series));

                return this.seriesList;
            });
    }


    public getSeriesImage(series)
    {
        if(
          series.seasons
          && series.seasons.length > 0
          && series.seasons[0].episodes
          && series.seasons[0].episodes.length > 0
          && series.seasons[0].episodes[0].previewImage
        )
        {
            series.previewImage = series.seasons[0].episodes[0].previewImage;
        }
        else{
            series.previewImage ='/assets/images/placeHolder.png';
        }
    }

}
