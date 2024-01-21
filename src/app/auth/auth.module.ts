import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {AuthRoutingModule} from './auth.routing.module';
import {CadastroComponent} from './pages/cadastro/cadastrostro.component';
import {LoginComponent} from './pages/login/login.component';

const components = [
  LoginComponent,
  CadastroComponent
]

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ...components
  ]
})
export class AuthModule { }
