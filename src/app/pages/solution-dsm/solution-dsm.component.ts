import { Component } from '@angular/core';
import { Config } from 'src/app/services';
@Component({
  selector: 'impactiv-solution-dsm',
  templateUrl: './solution-dsm.component.html',
  styleUrls: ['./solution-dsm.component.scss'],
})
export class SolutionDSMComponent {
  solution = Config.impactivSolutions.dsm;

  imageQuote = 'assets/images/icons/short_logo.png';

  textQuote =
    'Notre philosophie, inspirée de l’agilité, est de toujours intégrer à la réflexion et la conception l’ensemble des parties prenantes du projet. Le principe de cocréation entre nos clients décideurs, les utilisateurs opérationnels et nos équipes nous permet de confronter les idées, besoins et visions pour s’assurer de développer un outil efficace, pertinent et fonctionnel.';

  authorQuote = {
    job: 'Impactiv’ team',
  };

  blocks = [
    {
      title: 'Une équipe à l’écoute de vos besoins !',
      description:
        "Nous avons conscience que la demande de l'utilisateur final est en constant changement, et avec elle, votre produit numérique. L’évolution de votre solution ne doit pas se faire au dépend de vos équipes opérationnelles, nous jugeons de la qualité de notre travail aussi de par la simplicité d’utilisation des applications par vos équipes.",
      image: {
        src: 'assets/images/contents/solutions/dsm/team.png',
        alt: 'affluence',
      },
    },
    {
      title: 'Une implication en permanence sans mauvaise surprise.',
      description:
        "Vous souhaitez pouvoir y répondre lors du développement, c'est pourquoi les méthodologies et technologies employées doivent être en parfaite adéquation avec vos projets. En tant que propriétaire de produit, vous restez impliqué en permanence dans son développement et n'avez jamais de surprises.",
      image: {
        src: 'assets/images/contents/solutions/dsm/note.png',
        alt: 'affluence',
      },
    },
    {
      title: 'Une application sur mesure à forte valeur ajoutée.',
      description:
        "La qualité est importante mais ce n'est certainement pas le seul ingrédient d'une application réussie. Il est important que vous développiez le bon produit et une application à valeur ajoutée, adaptée aux besoins de votre groupe. ",
      image: {
        src: 'assets/images/contents/solutions/dsm/dev.png',
        alt: 'affluence',
      },
    },
    {
      title: 'Une approche stratégique et un état d’esprit ouvert.',
      description:
        "Cela nécessite un état d'esprit ouvert dans lequel, en tant que partenaire stratégique, nous nous devons d’être à même de répondre. Une approche stratégique dans laquelle nous explorons les possibilités avec vous et vos utilisateurs.",
      image: {
        src: 'assets/images/contents/solutions/dsm/talk.png',
        alt: 'affluence',
      },
    },
  ];

  titleExpertise = 'Notre expertise';

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
      image: 'assets/images/contents/solutions/common/methods.png',
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

      image: 'assets/images/contents/solutions/common/dev.png',
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

      image: 'assets/images/contents/solutions/common/stack.png',
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

      image: 'assets/images/contents/solutions/common/api.png',
      alt: 'alt',
    },
  ];

  titleCarousel = 'Des solutions adaptées à vos besoins métier !';
  descriptionCarousel =
    'Parce que vos besoins métier sont uniques, nous déployons des solutions sur mesure orientées expérience utilisateur et excellence opérationnelle.';
  imagesCarousel = [
    {
      src: 'assets/images/contents/solutions/dsm/sodexo.png',
      alt: 'Sodexo',
    },
    {
      src: 'assets/images/contents/solutions/dsm/la_mira.png',
      alt: 'La Mira',
    },
    {
      src: 'assets/images/contents/solutions/dsm/cdv.png',
      alt: 'Carte des vins',
    },
  ];
}
