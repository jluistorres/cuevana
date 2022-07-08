import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { NoFoundComponent } from './views/no-found/no-found.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        NoFoundComponent
    ]
})
export class CuevanaSharedModule { }
