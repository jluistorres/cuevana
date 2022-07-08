import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalMainComponent } from './main.component';
import { PortalMainRoutingModule } from './main-routing.module';
import { HomeComponent } from './views/home/home.component';
import { PortalCategoryComponent } from './views/category/category.component';
import { PortalCommonsModule } from '../../commons/commons.module';
import { PortalSearchComponent } from './views/search/search.component';
import { PortalAdultsComponent } from './views/adults/adults.component';

@NgModule({
  imports: [
    CommonModule,
    PortalCommonsModule,
    PortalMainRoutingModule
  ],
  declarations: [
    PortalMainComponent,
    HomeComponent,
    PortalCategoryComponent,
    PortalSearchComponent,
    PortalAdultsComponent
  ],
  providers: []
})
export class PortalMainModule { }
