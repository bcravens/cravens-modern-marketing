import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatAutocompleteModule, MatOptionModule, MatChipsModule,
    MatDialogModule, MatDatepickerModule, MatMenuModule, MatIconModule, MatProgressBarModule, MatTableModule, MatStepperModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatAutocompleteModule, MatOptionModule, MatChipsModule, MatDialogModule,
        MatDatepickerModule, MatMenuModule, MatIconModule, MatProgressBarModule, MatTableModule, MatStepperModule
    ],
    exports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatAutocompleteModule, MatOptionModule, MatChipsModule, MatDialogModule,
        MatDatepickerModule, MatMenuModule, MatIconModule, MatProgressBarModule, MatTableModule, MatStepperModule
    ],
})
export class CustomMaterialModule { }