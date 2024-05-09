## swiper-options

Library that allows dragging elements of a list to the right or left, to display multiple options to execute for each item.

## Installation

You can install this library via npm. Make sure you have Node.js installed on your system before running the following command:

```bash
npm install swiper-options
```

## Important

For the library to work correctly, it is necessary to have animejs installed

```bash
npm install animejs@3.2.2
```

## Features

  * Drag an item from a list on both sides using animation.
  * Display multiple options related to the dragged item (it is recommended to use a maximum of 4 options per side).
  * Customizable content using a template.

<p align="center">
  <img src="https://github.com/HenrySanguna/swipe-options/assets/60330730/4d1ece32-bca3-44d2-b990-907588d84e2a" alt="GIF Swipe Options">
</p>


## Usage

  * Options structure

    ```typescript
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
    ```
    * Structure of the data to be displayed in the template

      ```typescript
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
      ```

    * Example of a template for each item in the list
   
      ```html
      <ng-template #templateData let-item="item">
      <div class="list-content">
      <div class="profile">
      <h3>{{item.name}}</h3>
      </div>
      <div class="subtitle">
      <h4>{{item.description}}</h4>
      </div>
      <div class="subtitle">
      <h4>{{item.description}}</h4>
      </div>
      <div class="subtitle">
      <h4>{{item.description}}</h4>
      </div>
      </div>
      </ng-template>
      <lib-swiper-options [options]="options" [data]="data" [templateData]="templateData"></lib-swiper-options>
      ```

  ## Contribution
    If you find any issues or have any suggestions to improve this library, feel free to open an issue or send a pull request.

  ## Licencia
    This project is licensed under the MIT License.
