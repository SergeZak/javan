import { TestBed, inject } from '@angular/core/testing';

import { SlideMenuConfigService } from './slide-menu-config.service';

describe('SlideMenuConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlideMenuConfigService]
    });
  });

  it('should ...', inject([SlideMenuConfigService], (service: SlideMenuConfigService) => {
    expect(service).toBeTruthy();
  }));
});
