import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {ComponentsModule} from '../../../temp/src/lib/components/components.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, ComponentsModule],
  template: '<router-outlet/>'
})
export class AuthComponent { }
