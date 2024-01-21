import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ComponentsModule} from '../../../../../temp/src/lib/components/components.module';

form: FormGroup;

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ComponentsModule],
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {
  public form: FormGroup;

  public get f(): any {
    return this.form.controls;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      confirmacaoEmail: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]]
    })
  }
}
