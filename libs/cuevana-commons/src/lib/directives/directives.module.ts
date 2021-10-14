import { NgModule } from '@angular/core';
import { ClickOutDirective } from './clickOut.directive';

const DIRECTIVES = [
    ClickOutDirective
];

@NgModule({
    exports: [...DIRECTIVES],
    declarations: [...DIRECTIVES]
})
export class CuevanaDirectivesModule { }
