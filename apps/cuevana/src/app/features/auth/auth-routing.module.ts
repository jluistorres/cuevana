import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthSignInComponent } from './views/sign-in/sign-in.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'sign-in',
                component: AuthSignInComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }

