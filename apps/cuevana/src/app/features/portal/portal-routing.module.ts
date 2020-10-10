import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';
import { PortalCategoryComponent } from './views/category/category.component';
import { PortalDetailComponent } from './views/detail/detail.component';
import { PortalHomeComponent } from './views/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: PortalComponent,
        children: [
            {
                path: '',
                component: PortalHomeComponent
            },
            {
                path: 'category/:id',
                component: PortalCategoryComponent
            },
            {
                path: 'detail/:id/:type',
                component: PortalDetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortalRoutingModule { }
