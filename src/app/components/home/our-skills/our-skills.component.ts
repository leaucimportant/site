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
      title: 'La conception de l’expérience utilisateur.',
      description:
        'Nous pensons et travaillons de l’abstrait au concret. Nous aimons débuter avec la vision d’ensemble d’un nouveau projet et essayons par la suite d’en définir l’objectif principal. Tout ce que nous créons ensuite s’enligne dans cette direction et nous définissons le projet au fur et à mesure que nous avançons.',
      image: 'acc-ux.png',
      alt: 'conception de l’expérience utilisateur',
    },
    {
      title: 'Designer avec un objectif.',
      description:
        'La phase créative du projet nous permet de réfléchir au parcours utilisateur et de créer une direction artistique adéquate pour le projet. Nous établissons un design système et créons un pont entre la marque et le digital. Nous vous promettons ainsi que les aspects immersifs de votre projet digital fonctionneront parfaitement dans un contexte réel.',
      image: 'acc-design.png',
      alt: 'Designer avec un objectif',
    },
    {
      title: 'Développement influencé par la méthode Agile.',
      description:
        "Notre plus haute priorité est de satisfaire le client. Nous respectons les valeurs et les principes Agile et nous nous engageons à réagir rapidement aux besoins de nos clients. Notre équipe transverse accorde une attention particulière à l'excellence technique dans chaque élément. Un logiciel opérationnel est la principale mesure du succès de projet.",
      image: 'acc-dev.png',
      alt: 'Développement influencé par la méthode Agile',
    },
    {
      title: 'Infrastructure et back-end',
      description:
        "Le passage au cloud est un investissement judicieux pour l'avenir de votre business : vous devenez plus agile, vous pouvez adapter votre infrastructure à votre croissance, employer les technologies les plus adaptées et améliorer la sécurité. Quel que soit votre objectif, notre expertise peut vous aider à mener facilement à bien vos projets cloud.",
      image: 'acc-infra.png',
      alt: 'Infrastructure et back-end',
    },
    {
      title: 'Un suivi à chaque étape de votre projet.',
      description:
        'En intégrant l’ensemble de la valeur de votre projet en interne, nous vous accompagnons sur toute la durée de votre projet, de la co-création de votre cahier des charges au déploiement et au-delà.',
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
