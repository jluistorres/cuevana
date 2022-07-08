import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuevanaGuardsModule, CuevanaHttpModule, MovieService } from '@cuevana-commons';
import { CuevanaSharedModule } from './features/shared/shared.module';
import { initializeAppFactory } from './initialize.factory';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CuevanaSharedModule,
    // CuevanaHttpModule,
    CuevanaGuardsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      // deps: [MovieService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
