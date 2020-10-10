import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { PortalHomeComponent } from './views/home/home.component';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalCategoryComponent } from './views/category/category.component';
import { PortalCommonsModule } from './commons/commons.module';
import { PortalDetailComponent } from './views/detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    PortalRoutingModule,
    PortalCommonsModule
  ],
  declarations: [
    PortalComponent,
    PortalHomeComponent,
    PortalCategoryComponent,
    PortalDetailComponent
  ]
})
export class PortalModule { }
