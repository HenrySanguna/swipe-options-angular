import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SwiperContainerComponent } from './components/swiper-container/swiper-container.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwiperContainerComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  options: any =
    {
      optionsLeft: [{
        name: "Editar",
        icon: "bx bx-edit",
        background: "success",
        action: () => {
        }
      },
      {
        name: "Editar",
        icon: "bx bx-edit",
        background: "info",
        action: () => { }
      },
      {
        name: "Editar",
        icon: "bx bx-edit",
        background: "primary",
        action: () => { }
      },
      {
        name: "Editar",
        icon: "bx bx-edit",
        background: "secondary",
        action: () => { }
      }],
      optionsRight: [{
        name: "Editar",
        icon: "bx bx-edit",
        background: "danger",
        action: () => { }
      },
      {
        name: "Editar",
        icon: "bx bx-edit",
        background: "warning",
        action: () => { }
      }]
    };

  data: any[] = [{
    id: 1,
    name: "Chris Evans",
    description: "Captain America"
  },
  {
    id: 2,
    name: "Scarlett Johansson",
    description: "Black Widow"
  },
  {
    id: 3,
    name: "Chris Hemsworth",
    description: "Thora"
  },
  {
    id: 4,
    name: "Brie Larson",
    description: "Captain Marvel"
  }
  ];
}
