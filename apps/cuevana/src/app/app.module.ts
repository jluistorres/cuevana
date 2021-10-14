import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuevanaGuardsModule } from '@cuevana-commons';
import { CuevanaSharedModule } from './features/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CuevanaSharedModule,
    CuevanaGuardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
