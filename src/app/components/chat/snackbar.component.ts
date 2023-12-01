import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-snackbar',
  template: `
    <span class="material-icons">{{ data.icon }}</span>
    {{ data.message }}
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: black;
        background-color: white;
      }
      .material-icons {
        padding-right: 8px;
        color: #1457d9;
        width: 30px;
      }
    `,
  ],
})
export class CustomSnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}
