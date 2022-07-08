import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalCommonsModule } from './commons/commons.module';
import { PortalDetailComponent } from './views/detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    PortalRoutingModule,
    PortalCommonsModule,
  ],
  declarations: [
    PortalComponent,    
    PortalDetailComponent,        
  ]
})
export class PortalModule { }
