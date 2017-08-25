import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesIntroComponent } from './series-intro.component';

describe('SeriesIntroComponent', () => {
  let component: SeriesIntroComponent;
  let fixture: ComponentFixture<SeriesIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
