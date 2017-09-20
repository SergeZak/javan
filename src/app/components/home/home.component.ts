import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { Response } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { SlideMenuConfigService } from '../../services/slide-menu-config.service';
import { VideoApiService } from '../../services/video-api.service';
import {MovieService} from "../../services/movie.service";
import {SeriesService} from "../../services/series.service";

declare var $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
    thisYear = new Date().getFullYear();
    biggestHeight: number;
    liveTvList: any[];
    moviesReq: any;
    seriesReq: any;
    showsReq: any;
    imgReq: any;
    Movies: any = [];
    Series: any = [];
    Shows: any = [];


    constructor(
        private _elementRef: ElementRef,
        private _menuService: SlideMenuConfigService,
        private _api: VideoApiService,
        private _sanitizer: DomSanitizer,
        public movieService: MovieService,
        public seriesService: SeriesService
    )
    {

        this.liveTvList = [
            {
                'href': '#',
                'title': 'CBS Reality',
                'alt': 'CBS Reality',
                'image': './assets/images/cbs-reality.png',
                'imageWidth': '82'
            }, {
                'href': '#',
                'title': 'MCS Extreme',
                'alt': 'MCS Extreme',
                'image': './assets/images/mcs.png',
                'imageWidth': '91'
            }, {
                'href': '#',
                'title': 'MCS Lifestyle',
                'alt': 'MCS Lifestyle',
                'image': './assets/images/mcs-lifestyle.png',
                'imageWidth': '95'
            }, {
                'href': '#',
                'title': 'Travel Channel',
                'alt': 'Travel Channel',
                'image': './assets/images/travel.png',
                'imageWidth': '97'
            }, {
                'href': '#',
                'title': 'DiscoveryHD Showcase',
                'alt': 'DiscoveryHD Showcase',
                'image': './assets/images/discoveryhd.png',
                'imageWidth': '106'
            }, {
                'href': '#',
                'title': 'CBS Reality',
                'alt': 'CBS Reality',
                'image': './assets/images/cbs-reality.png',
                'imageWidth': '82'
            }, {
                'href': '#',
                'title': 'MCS Extreme',
                'alt': 'MCS Extreme',
                'image': './assets/images/mcs.png',
                'imageWidth': '82'
            }, {
                'href': '#',
                'title': 'MCS Lifestyle',
                'alt': 'MCS Lifestyle',
                'image': './assets/images/mcs-lifestyle.png',
                'imageWidth': '95'
            }, {
                'href': '#',
                'title': 'Travel Channel',
                'alt': 'Travel Channel',
                'image': './assets/images/travel.png',
                'imageWidth': '97'
            }, {
                'href': '#',
                'title': 'DiscoveryHD Showcase',
                'alt': 'DiscoveryHD Showcase',
                'image': './assets/images/discoveryhd.png',
                'imageWidth': '106'
            }
        ];
    }

    ngAfterViewInit(): void {

        /* Home Page Inner Scroll */
        $('.movies_poster_section').slimScroll({
            height: '330px',
            railVisible: true,
            alwaysVisible: true
        });

        /* Home Page Inner Scroll */
        $('.tv_show').slimScroll({
            height: '160px',
            railVisible: true,
            alwaysVisible: true
        });

        $(".live_tv_carousel").owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 5,
            itemsDesktop: [1199, 5],
            itemsDesktopSmall: [979, 4],
            itemsTablet: [768, 3],
            itemsMobile: [479, 2]
        });
    }

    ngOnInit() {
        this.biggestHeight = this._menuService.Height = this._elementRef.nativeElement.querySelector('.content_left').offsetHeight;

        this.moviesReq = this.movieService.getMovieList()
            .subscribe(movies => {
                this.Movies = movies;
            });

        this.seriesReq = this.seriesService.getSeriesList()
            .subscribe(series => this.Series = series);

        this.showsReq = this._api.getAllShows().subscribe(res => {
            this.Shows = res.content;
            this.Shows.forEach(element => {
                // this.getImage(element.previewImage, element);
            });
        });
    }

    private getImage(imageId, element): void {

        // this.imgReq = this._api.getImageUrl(imageId).subscribe(url => {
        //     element.url = url;
        // });
    }


    ngOnDestroy(): void {
        this.moviesReq.unsubscribe();
        this.seriesReq.unsubscribe();
        this.showsReq.unsubscribe();
        // this.imgReq.unsubscribe();
    }
}
