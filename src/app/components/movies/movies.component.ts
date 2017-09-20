import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { VideoApiService } from '../../services/video-api.service';
import {MovieService} from "../../services/movie.service";

declare var $: any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterViewInit, OnDestroy {
  private req: any;
  private Movies: any;
  private imgReq: any;
  private dateNow: Date;
  private totalResult: string;

  constructor(
    private _api: VideoApiService,
    public movieService: MovieService
  ) {
    this.dateNow = new Date();
    this.totalResult = '??';
  }

  ngAfterViewInit() {
    $(".grey-checkbox input[checked]").click(function () {
      $(".text").css("color", "#fff");
    });

    <any>$('#rounding_based').find('.nstSlider').nstSlider({
      "rounding": {
        "1": "1900",
        "10": "1910",
        "2016": "2016"
      },
      "left_grip_selector": ".leftGrip",
      "right_grip_selector": ".rightGrip",
      "value_bar_selector": ".bar",
      "value_changed_callback": function (cause, leftValue, rightValue) {
        var $container = $(this).parent();
        $container.find('.leftLabel').text(leftValue);
        $container.find('.rightLabel').text(rightValue);
      }
    });

    <any>$('#rounding_based_two').find('.nstSlider').nstSlider({
      "rounding": {
        "1": "10",
        "10": "10",
        "100": "100"
      },
      "left_grip_selector": ".leftGrip",
      "right_grip_selector": ".rightGrip",
      "value_bar_selector": ".bar",
      "value_changed_callback": function (cause, leftValue, rightValue) {
        var $container = $(this).parent();
        $container.find('.leftLabel').text(leftValue);
        $container.find('.rightLabel').text(rightValue);
      }
    });
  }

  ngOnInit() {
    this.req = this.movieService.getMovieList()
        .subscribe(movies => {
            this.Movies = movies;
        })

  }

  ngOnDestroy(): void {
      this.req.unsubscribe();
  }
}
