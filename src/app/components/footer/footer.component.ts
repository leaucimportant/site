import { Component } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly routes = Config.impactivRoutes;

  year = new Date().getFullYear();

  phone = '';
  phoneAreaCode = '+339';
  phoneStart = '5333';
  phoneEnd = '0360';

  setPhone() {
    return {
      phoneAreaCode: '+33 9',
      phoneStart: ' 53 33',
      phoneEnd: ' 03 60',
    };
  }
}
