import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitResolver } from '@cuevana-commons';
import { PortalComponent } from './portal.component';
import { PortalDetailComponent } from './views/detail/detail.component';

const routes: Routes = [
    {
        path: '',
        component: PortalComponent,
        resolve: { genres: InitResolver },
        children: [
            {
                path: '',
                loadChildren: () => import('./views/main/main.module').then(m => m.PortalMainModule)
            },
            {
                path: 'detalle/:id/:type',
                component: PortalDetailComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortalRoutingModule { }
