import { Injectable } from '@angular/core';
import { ResponseContentType, Http, Response } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from "rxjs/Observable";
import { Consts } from '../app.const';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'


@Injectable()
export class VideoApiService {
    public moviesList: [any];
    public seriesList: [any];
    public tvShowsList: [any];

    constructor(private _http: Http, private _consts: Consts, private _sanitizer: DomSanitizer) { }

    //  movies apis
    public getAllMovies(): Observable<any> {
        return this._http.get(this._consts.APIs.Movies.GetAll)
            .map(this.extractData)
            .catch(this._errorHandle);
    }

    // series apis
    public getAllSeries(): Observable<any> {
        return this._http.get(this._consts.APIs.Series.GetAll)
            .map(this.extractData)
            .catch(this._errorHandle);
    }

    // tvshows apis
    public getAllShows(): Observable<any> {
        return this._http.get(this._consts.APIs.TvShows.GetAll)
            .map(this.extractData)
            .catch(this._errorHandle);
    }

    // tvshows apis
    public getAllLiveTVs(): Observable<any> {
        return this._http.get(this._consts.APIs.LiveTV.GetAll)
            .map(this.extractData)
            .catch(this._errorHandle);
    }

    public saveMoviesList(movies: any) {
        this.moviesList = movies;
    }

    public getImage(imageId: string) {
        return this._http.get(this._consts.APIs.Images.GetImage + imageId, { responseType: ResponseContentType.Blob })
            .map(res => res.blob())
            .catch(this._errorHandle);
    }

    public getImageUrl(imageId: string): Observable<any> {

        return this._http.get(this._consts.APIs.Images.GetImage + imageId, { responseType: ResponseContentType.Blob })
            .map(res => {
                var urlCreator = window.URL;
                return this._sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(res.blob()));;
            })
            .catch((this._errorHandle));
    }


    private extractData(res: Response) {
        let body = res.json();
        // console.log(body);
        return body || {};
    }

    private _errorHandle(error: any, caught: any): any {
        console.error(error, caught);
    }
}
