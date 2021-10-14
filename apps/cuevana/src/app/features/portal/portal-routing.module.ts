import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard, InitResolver } from '@cuevana-commons';
import { PortalComponent } from './portal.component';
import { AdultsComponent } from './views/adults/adults.component';
import { PortalCategoryComponent } from './views/category/category.component';
import { PortalDetailComponent } from './views/detail/detail.component';
import { HomeComponent } from './views/home/home.component';
import { PortalSearchComponent } from './views/search/search.component';

const routes: Routes = [
    {
        path: '',
        component: PortalComponent,
        // resolve: { genres: InitResolver },
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'detail/:id/:type',
                component: PortalDetailComponent
            },
            {
                path: 'category/:id',
                component: PortalCategoryComponent
            },
            {
                path: 'search',
                component: PortalSearchComponent
            },
            {
                path: 'adult',
                canActivate: [AuthenticatedGuard],
                component: AdultsComponent
            },            
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortalRoutingModule { }
