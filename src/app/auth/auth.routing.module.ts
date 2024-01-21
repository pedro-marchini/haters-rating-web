import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {CadastroComponent} from './pages/cadastro/cadastrostro.component';
import {LoginComponent} from './pages/login/login.component';

export const routes: Routes = [
    {
        path: "",
        component: AuthComponent,
        children: [
            {path: "", redirectTo: "login", pathMatch: "full"},
            {path: "login", component: LoginComponent},
            {path: "cadastrar-se", component: CadastroComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule { }
