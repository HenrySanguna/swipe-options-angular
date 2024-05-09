import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperOptionsV16Component } from './swiper-options-v16.component';

describe('SwiperOptionsV16Component', () => {
  let component: SwiperOptionsV16Component;
  let fixture: ComponentFixture<SwiperOptionsV16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperOptionsV16Component]
    });
    fixture = TestBed.createComponent(SwiperOptionsV16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
