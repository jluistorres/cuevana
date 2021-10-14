import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoFoundComponent } from './features/shared/views/no-found/no-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/portal/portal.module').then(m => m.PortalModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: NoFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
