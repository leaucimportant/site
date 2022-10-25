import { Component, OnInit } from '@angular/core';
import { Config, UseCaseService } from 'src/app/services';
import { impactivRoutes } from 'src/app/services/config';

@Component({
  selector: 'impactiv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private useCaseService: UseCaseService) {}
  routes = Config.impactivRoutes;
  hoveringIndex: null | number = null;
  contactRoute = impactivRoutes.contact;
  homeRoute = impactivRoutes.home;
  solutions = [
    {
      title: 'Affichage dynamique',
      description: 'Communiquer efficacement en temps réel.',
      icon: 'rectangle.svg',
      alt: 'rectangle',
      route: impactivRoutes.screenSolution,
    },
    {
      title: 'Application mobiles',
      description: 'Créez des applications dédiées pour le web.',
      icon: 'affichage.svg',
      alt: 'affichage',
      route: impactivRoutes.webAppSolution,
    },
    {
      title: 'Mesure d’affluence',
      description: 'Mesurez l’affluence en temps-réel.',
      icon: 'affluence.svg',
      alt: 'affluence',
      route: impactivRoutes.affluenceSolution,
    },
    {
      title: 'Intégration',
      description: 'Développement sur-mesure.',
      icon: 'security.svg',
      alt: 'sécurité',
      route: impactivRoutes.dsmSolution,
    },
  ];
  expertises = [];
  phone = '';
  phoneAreaCode = '+339';
  phoneStart = '5333';
  phoneEnd = '0360';
  useCases: { name: string; slug: string; logo?: string }[] = [];

  async ngOnInit(): Promise<void> {
    this.useCases = await this.useCaseService.getUseCasesName();
  }
}
