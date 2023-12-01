import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CustomSnackbarComponent } from './components/chat/snackbar.component';

@NgModule({
  declarations: [CustomSnackbarComponent],
  imports: [
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
  ],
  exports: [
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
    CustomSnackbarComponent,
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ],
})
export class MaterialModule {}
