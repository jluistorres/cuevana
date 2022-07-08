import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CuevanaDirectivesModule, CuevanaHttpModule, CuevanaInterceptorsModule, CuevanaPipesModule, CuevanaResolversModule } from '@cuevana-commons';
import { CardMovieSmallComponent } from './components/card-movie-small/card-movie-small.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { GeneralService } from './services/general.service';

const components = [
    HeaderComponent,
    FooterComponent,
    CardMovieComponent,
    CardMovieSmallComponent,
    ListMoviesComponent,
    SkeletonComponent
];

const modules = [
    CuevanaHttpModule,
    CuevanaPipesModule,
    CuevanaDirectivesModule,
    CuevanaInterceptorsModule,
    CuevanaResolversModule
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ...modules
    ],
    exports: [
        ...modules,
        ...components,
    ],
    declarations: [
        ...components
    ]
})
export class PortalCommonsModule { }
