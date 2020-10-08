import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CuevanaHttpModule } from '@cuevana-commons';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const components = [
    HeaderComponent,
    FooterComponent,
    CardMovieComponent
];

const modules = [
    CuevanaHttpModule
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ...modules
    ],
    exports: [
        ...components,
        ...modules
    ],
    declarations: [
        ...components
    ]
})
export class PortalCommonsModule { }

