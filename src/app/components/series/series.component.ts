import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { VideoApiService } from '../../services/video-api.service';

declare var $: any;

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  private req: any;
  private Series: [any];
  private imgReq: any;
  private totalResult: string;

  constructor(private _api: VideoApiService) {
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
    this.req = this._api.getAllMovies().subscribe(res => {
      //console.log(res);
      this.Series = res.content;
      this.totalResult = res.totalElements;
      if (this.totalResult)
        this.Series.forEach(element => {
          this.getImage(element.previewImage, element);
        });
    });

  }
  private getImage(imageId, element): void {
    element.url = 'http://localhost:4200/assets/images/placeHolder.png';
    this.imgReq = this._api.getImageUrl(imageId).subscribe(url => {
      element.url = url;
    });
  }

  ngOnDestroy(): void {
    this.req.unsubscribe()
    if (this.imgReq)
      this.imgReq.unsubscribe();
  }
}
