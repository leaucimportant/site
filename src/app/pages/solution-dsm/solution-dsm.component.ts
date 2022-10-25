import { Component } from '@angular/core';
import { Config } from 'src/app/services';
@Component({
  selector: 'impactiv-solution-dsm',
  templateUrl: './solution-dsm.component.html',
  styleUrls: ['./solution-dsm.component.scss'],
})
export class SolutionDSMComponent {
  solution = Config.impactivSolutions.dsm;
  useCasesName: string[] = [];
  banner = {
    title: 'Votre expérience commence ici !',
    description:
      'Pour simplement échanger sur votre projet ou avoir une démonstration de nos solutions, nos équipes se tiennent à votre disposition.',
    parallax: true,
  };

  names = ['Sodexo', 'La Mira', 'Aspp'];

  usecaseCard = [
    {
      title: 'Plateforme e-commerce centralisée.',
      subtitle:
        'Sodexo, en qualité de leader mondial des services aux entreprises, souhaitait uniformiser et améliorer sa solution e-commerce à destination des collaborateurs de ses clients.',
    },
    {
      title:
        'La Mira accélère son activité au travers de sa transformation digitale.',
      subtitle:
        'Le développement de la nouvelle plateforme de e-réservation valorise l’offre, l’expérience client tout en assurant un retour sur investissement (ROI) très important.',
    },
    {
      title: 'Plateforme e-commerce centralisée.',
      subtitle:
        'Sodexo, en qualité de leader mondial des services aux entreprises, souhaitait uniformiser et améliorer sa solution e-commerce à destination des collaborateurs de ses clients.',
    },
  ];

  blocks = [
    {
      title: 'Une équipe à l’écoute de vos besoins !',
      description:
        "Nous avons conscience que la demande de l'utilisateur final est en constant changement, et avec elle, votre produit numérique. L’évolution de votre solution ne doit pas se faire au dépend de vos équipes opérationnelles, nous jugeons de la qualité de notre travail aussi de par la simplicité d’utilisation des applications par vos équipes.",
      image: {
        src: 'assets/images/contents/solutions/common/affluence.png',
        alt: 'affluence',
      },
    },
    {
      title: 'Une application sur mesure à forte valeur ajoutée.',
      description:
        "La qualité est importante mais ce n'est certainement pas le seul ingrédient d'une application réussie. Il est important que vous développiez le bon produit et une application à valeur ajoutée, adaptée aux besoins de votre groupe. ",
      image: {
        src: 'assets/images/contents/solutions/common/affluence.png',
        alt: 'affluence',
      },
    },
    {
      title: 'Une implication en permanence sans mauvaise surprise.',
      description:
        "Vous souhaitez pouvoir y répondre lors du développement, c'est pourquoi les méthodologies et technologies employées doivent être en parfaite adéquation avec vos projets. En tant que propriétaire de produit, vous restez impliqué en permanence dans son développement et n'avez jamais de surprises.",
      image: {
        src: 'assets/images/contents/solutions/common/affluence.png',
        alt: 'affluence',
      },
    },
    {
      title: 'Une approche stratégique et un état d’esprit ouvert.',
      description:
        "Cela nécessite un état d'esprit ouvert dans lequel, en tant que partenaire stratégique, nous nous devons d’être à même de répondre. Une approche stratégique dans laquelle nous explorons les possibilités avec vous et vos utilisateurs.",
      image: {
        src: 'assets/images/contents/solutions/common/affluence.png',
        alt: 'affluence',
      },
    },
  ];
}
