import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CuevanaDirectivesModule, CuevanaGuardsModule, CuevanaHttpModule, CuevanaInterceptorsModule, CuevanaPipesModule } from '@cuevana-commons';
import { CardMovieSmallComponent } from './components/card-movie-small/card-movie-small.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const components = [
    HeaderComponent,
    FooterComponent,
    CardMovieComponent,
    CardMovieSmallComponent
];

const modules = [
    CuevanaHttpModule,
    CuevanaPipesModule,
    CuevanaDirectivesModule,
    CuevanaGuardsModule,
    CuevanaInterceptorsModule
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

