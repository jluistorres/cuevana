import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './movies.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        MovieService
    ]
})
export class CuevanaHttpModule { }
