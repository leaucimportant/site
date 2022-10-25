import { Component, OnInit } from '@angular/core';
import { Config, UseCaseService } from 'src/app/services';

@Component({
  selector: 'impactiv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private useCaseService: UseCaseService) {}

  readonly routes = Config.impactivRoutes;
  year = new Date().getFullYear();

  phone = '';
  phoneAreaCode = '+339';
  phoneStart = '5333';
  phoneEnd = '0360';
  useCases: { name: string; slug: string }[] = [];

  setPhone() {
    return {
      phoneAreaCode: '+33 9',
      phoneStart: ' 53 33',
      phoneEnd: ' 03 60',
    };
  }

  async ngOnInit(): Promise<void> {
    this.useCases = await this.useCaseService.getUseCasesName();
  }
}
