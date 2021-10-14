import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { HomeComponent } from './views/home/home.component';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalCommonsModule } from './commons/commons.module';
import { PortalDetailComponent } from './views/detail/detail.component';
import { PortalCategoryComponent } from './views/category/category.component';
import { PortalSearchComponent } from './views/search/search.component';
import { AdultsComponent } from './views/adults/adults.component';

@NgModule({
  imports: [
    CommonModule,
    PortalRoutingModule,
    PortalCommonsModule,
  ],
  declarations: [
    PortalComponent,
    HomeComponent,
    PortalDetailComponent,
    PortalCategoryComponent,
    PortalSearchComponent,
    AdultsComponent
  ]
})
export class PortalModule { }
