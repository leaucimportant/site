import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';

@Component({
  selector: 'impactiv-our-skills',
  templateUrl: './our-skills.component.html',
  styleUrls: ['./our-skills.component.scss'],
})
export class OurSkillsComponent implements OnInit {
  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;

  skills = [
    {
      title: $localize`:Text|title skill @@OUR-SKILLS-UX:`,
      description: $localize`:Text|description skill @@OUR-SKILLS-UX-DESCRIPTION:`,
      image: 'acc-ux.png',
      alt: "conception de l'expérience utilisateur",
    },
    {
      title: $localize`:Text|title skill @@OUR-SKILLS-UI:`,
      description: $localize`:Text|description skill @@OUR-SKILLS-UI-DESCRIPTION:`,
      image: 'acc-design.png',
      alt: 'Designer avec un objectif',
    },
    {
      title: $localize`:Text|title skill @@OUR-SKILLS-AGILE:`,
      description: $localize`:Text|description skill @@OUR-SKILLS-AGILE-DESCRIPTION:`,
      image: 'acc-dev.png',
      alt: 'Développement influencé par la méthode Agile',
    },
    {
      title: $localize`:Text|title skill @@OUR-SKILLS-INFRASTRUCTURE:`,
      description: $localize`:Text|description skill @@OUR-SKILLS-INFRASTRUCTURE-DESCRIPTION:`,
      image: 'acc-infra.png',
      alt: 'Infrastructure et back-end',
    },
    {
      title: $localize`:Text|title skill @@OUR-SKILLS-FOLLOW-UP:`,
      description: $localize`:Text|description skill @@OUR-SKILLS-FOLLOW-UP-DESCRIPTION:`,
      image: 'acc-suvi.png',
      alt: 'Un suivi à chaque étape de votre projet',
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
