import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'swiper-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiper-container.component.html',
  styleUrl: './swiper-container.component.scss'
})
export class SwiperContainerComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() options: any;
  @Input() templateData: any;

  ngOnInit(): void {
    
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const items = document.getElementsByClassName('list-item');
        const itemsArray = Array.from(items);
        const optionsLeftCount = this.options.optionsLeft.length;
        const optionsRightCount = this.options.optionsRight.length;
        const moveRight = optionsRightCount * 50;
        const moveLeft = optionsLeftCount * 50;
        const elementMoveRight = optionsRightCount * 49;
        const elementMoveLeft = optionsLeftCount * 49;

        itemsArray.forEach((item: any) => {
          item.addEventListener('touchstart', (e: any) => {
            const actualCard = e.target.closest('.list-item')
            actualCard.dataset.x =
              Number(e.touches[0].pageX) + Number(actualCard.dataset.move) || 0;

          });

          item.addEventListener('touchmove', (e: any) => {
            const actualCard = e.target.closest('.list-item')
            let moveX = Number(actualCard.dataset.x) - e.touches[0].pageX;

            if (optionsLeftCount > 0 && optionsRightCount > 0) {
              moveX = Math.max(-moveLeft, Math.min(moveRight, moveX));
            } else if (optionsLeftCount > 0 && optionsRightCount === 0) {
              moveX > moveLeft ? (moveX = 0) : null;
              moveX < -moveLeft ? (moveX = -moveLeft) : null;
            } else {
              moveX > moveRight ? (moveX = moveRight) : null;
              moveX < -moveRight ? (moveX = 0) : null;
            }
            actualCard.dataset.move = moveX;

            anime({
              targets: actualCard,
              translateX: -Number(actualCard.dataset.move),
              duration: 300,
            });
          });

          item.addEventListener('touchend', (e: any) => {
            const actualCard = e.target.closest('.list-item')
            let elementMove = actualCard.dataset.move;

            if (optionsLeftCount > 0 && optionsRightCount > 0) {
              elementMove = Math.min(elementMoveRight, Math.max(-elementMoveLeft, elementMove));
            } else if (optionsLeftCount > 0 && optionsRightCount === 0) {
              if (elementMove > elementMoveLeft) elementMove = 0;
              else if (elementMove < -elementMoveLeft) elementMove = -elementMoveLeft;
              else elementMove = 0;
            } else {
              if (elementMove > elementMoveRight) elementMove = elementMoveRight;
              else if (elementMove < -elementMoveRight) elementMove = 0;
              else elementMove = 0;
            }

            itemsArray.forEach((element: any) => {

              if (element === e.target) {
                return null;
              }

              element.dataset.x = 0;
              element.dataset.move = 0;

              anime({
                targets: element,
                translateX: 0,
              });
            });

            setTimeout(() => {
              anime({
                targets: actualCard,
                translateX: -Number(elementMove),
              });
            }, 1);
          });
        });
      }, 1500);
    }
  }
}
