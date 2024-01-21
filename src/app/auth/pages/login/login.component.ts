import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ComponentsModule} from '../../../../../temp/src/lib/components/components.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, ComponentsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  form: FormGroup;
  get f(): any {
    return this.form.controls;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]]
    })
  }
}
