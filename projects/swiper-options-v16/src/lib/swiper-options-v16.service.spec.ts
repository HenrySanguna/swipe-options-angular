import { TestBed } from '@angular/core/testing';

import { SwiperOptionsV16Service } from './swiper-options-v16.service';

describe('SwiperOptionsV16Service', () => {
  let service: SwiperOptionsV16Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwiperOptionsV16Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
