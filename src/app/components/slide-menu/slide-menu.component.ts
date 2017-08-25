import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.css']
})
export class SlideMenuComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() description: string;
  @Input() slide_height: string;

  constructor() {

  }

  ngOnInit() {
    // this.slide_height = this.slide_height + 'px';
    // console.info('height in slide', this.slide_height);
  }

  ngAfterViewInit(): void {
   // console.log('slide menu component ngAfterViewInit runs');   
  }

}
