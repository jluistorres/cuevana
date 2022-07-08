import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PortalMainComponent } from "./main.component";
import { PortalCategoryComponent } from "./views/category/category.component";
import { HomeComponent } from "./views/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: PortalMainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'category/:id',
        component: PortalCategoryComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalMainRoutingModule { }
