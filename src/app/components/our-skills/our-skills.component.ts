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
      title: 'La conception de l’expérience utilisateur. 1',
      description:
        'Nous pensons et travaillons de l’abstrait au concret. Nous aimons débuter avec la vision d’ensemble d’un nouveau projet et essayons par la suite d’en définir l’objectif principal. Tout ce que nous créons ensuite s’enligne dans cette direction et nous définissons le projet au fur et à mesure que nous avançons.',
      image: 'default_skill.png',
      alt: 'alt',
    },
    {
      title: 'Designer avec un objectif en tête. 2',
      description:
        'Nous pensons et travaillons de l’abstrait au concret. Nous aimons débuter avec la vision d’ensemble d’un nouveau projet et essayons par la suite d’en définir l’objectif principal. Tout ce que nous créons ensuite s’enligne dans cette direction et nous définissons le projet au fur et à mesure que nous avançons.',
      image: 'default_skill.png',
      alt: 'alt',
    },
    {
      title: 'Designer avec un objectif en tête. 3',
      description:
        'Nous pensons et travaillons de l’abstrait au concret. Nous aimons débuter avec la vision d’ensemble d’un nouveau projet et essayons par la suite d’en définir l’objectif principal. Tout ce que nous créons ensuite s’enligne dans cette direction et nous définissons le projet au fur et à mesure que nous avançons.',
      image: 'default_skill.png',
      alt: 'alt',
    },
    {
      title: 'Designer avec un objectif en tête. 4',
      description:
        'Nous pensons et travaillons de l’abstrait au concret. Nous aimons débuter avec la vision d’ensemble d’un nouveau projet et essayons par la suite d’en définir l’objectif principal. Tout ce que nous créons ensuite s’enligne dans cette direction et nous définissons le projet au fur et à mesure que nous avançons.',
      image: 'default_skill.png',
      alt: 'alt',
    },
    {
      title: 'Designer avec un objectif en tête. 5',
      description:
        'Nous pensons et travaillons de l’abstrait au concret. Nous aimons débuter avec la vision d’ensemble d’un nouveau projet et essayons par la suite d’en définir l’objectif principal. Tout ce que nous créons ensuite s’enligne dans cette direction et nous définissons le projet au fur et à mesure que nous avançons.',
      image: 'default_skill.png',
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
