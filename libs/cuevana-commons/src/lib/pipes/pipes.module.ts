import { NgModule } from '@angular/core';
import { RuntimePipe } from './runtime.pipe';

const PIPES = [
    RuntimePipe
];

@NgModule({
    exports: [
        ...PIPES
    ],
    declarations: [
        ...PIPES
    ]
})
export class CuevanaPipesModule { }
