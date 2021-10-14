import { NgModule } from '@angular/core';
import { MovieService } from '../http/movies.service';
import { InitResolver } from './init.resolver';

@NgModule({
  providers: [
    MovieService,
    InitResolver
  ]
})
export class CuevanaResolversModule { }
