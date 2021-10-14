import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { NoFoundComponent } from './views/no-found/no-found.component';

const components = [
    NoFoundComponent
];

@NgModule({
    imports: [CommonModule],
    exports: [...components],
    declarations: [
        ...components
    ]
})
export class CuevanaSharedModule { }
