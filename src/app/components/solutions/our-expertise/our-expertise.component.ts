import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';

@Component({
  selector: 'impactiv-our-expertise',
  templateUrl: './our-expertise.component.html',
  styleUrls: ['./our-expertise.component.scss'],
})
export class OurExpertiseComponent implements OnInit {
  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;

  expertises = [
    {
      title: 'Méthodologies',
      items: [
        'Cahier des charges et recettages',
        'Intégration continue',
        'Déploiement continu',
        'Tests unitaires et fonctionnels',
        'Privacy by Design & Privacy by Default',
      ],
      image: 'affluence.png',
      alt: 'alt',
    },
    {
      title: 'Développements',
      items: [
        'Développement Frontend',
        'Développement Backend',
        'Progressive Web App',
        'Applications natives',
      ],

      image: 'affluence.png',
      alt: 'alt',
    },
    {
      title: 'Technologies',
      items: [
        'Serverless',
        'Micro Services',
        'Micro Frontends',
        'BDD relationnelle & orientée documents',
        'Agent de messages',
      ],

      image: 'affluence.png',
      alt: 'alt',
    },
    {
      title: 'API & services',
      items: [
        'Authentification (SSO, OpenID…)',
        'API (GraphQL, REST)',
        'Emailing',
        'Analytics',
        'Passerelles de paiement (VAD)',
      ],

      image: 'affluence.png',
      alt: 'alt',
    },
  ];

  currentStep = 0;

  ngOnInit(): void {}

  selectPage(isNext: boolean): void {
    this.ngxGlide.go(isNext ? '>' : '<');
  }

  onRanAfter(): void {
    this.currentStep = this.ngxGlide.getIndex();
  }
}
