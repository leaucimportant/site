import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { OgMeta } from '../seo.service';
import { impactivRoutes, ImpactivRoutesEnum } from './routes.config';

export const seoMeta: Record<ImpactivRoutesEnum, Required<OgMeta> | null> = {
  home: {
    title: 'Partenaire de votre digitalisation',
    type: 'website',
    image: Location.joinWithSlash(environment.siteUri, 'assets/seo/home.png'),
    url: environment.siteUri,
    description:
      'Découvrez nos solutions digitales 360°. Pour une digitalisation maîtrisée, orientée expérience utilisateur et excellence opérationnelle.',
  },
  screenSolution: {
    title: 'Un monde de solutions audiovisuelles et digitales !',
    type: 'website',
    image: Location.joinWithSlash(environment.siteUri, 'assets/seo/screen.png'),
    url: Location.joinWithSlash(
      environment.siteUri,
      impactivRoutes.screenSolution
    ),
    description:
      'Expert, intégrateur de solutions d’affichage dynamique tous supports, nous vous accompagnons de A à Z ! De l’étiquette connectée aux murs LEDs XXL.',
  },
  webAppSolution: {
    title: 'Plongez dans un écosystème complet et performant',
    type: 'website',
    image: Location.joinWithSlash(environment.siteUri, 'assets/seo/webapp.png'),
    url: Location.joinWithSlash(
      environment.siteUri,
      impactivRoutes.webAppSolution
    ),
    description:
      'La solution tout-en-un au service de vos collaborateurs. Une solution digitale déployée à votre identité intégrant l’ensemble des services mis à disposition de vos clients/consommateurs!',
  },
  affluenceSolution: {
    title:
      'Nos capteurs d’affluence au service de votre transformation digitale !',
    type: 'website',
    image: Location.joinWithSlash(
      environment.siteUri,
      'assets/seo/affluence.png'
    ),
    url: Location.joinWithSlash(
      environment.siteUri,
      impactivRoutes.affluenceSolution
    ),
    description:
      'Une solution de comptage et d’analyse de vos flux. Mesurez le nombre de personnes en protégeant l’anonymat des passants avec une précision sans pareil grâce à l’utilisation de la technologie Time-of-flight',
  },
  dsmSolution: {
    title:
      'Votre partenaire privilégié au service de votre transformation digitale !',
    type: 'website',
    image: Location.joinWithSlash(environment.siteUri, 'assets/seo/dsm.png'),
    url: Location.joinWithSlash(
      environment.siteUri,
      impactivRoutes.dsmSolution
    ),
    description:
      "Adaptez vos projets aux process et non l'inverse ! Développement sur-mesure ou intégration ambitieuse, nous créons pour vous des outils métier à forte valeur ajoutée.",
  },
  company: {
    title: 'Reconnus par des acteurs majeurs dans leur domaine.',
    type: 'website',
    image: Location.joinWithSlash(
      environment.siteUri,
      'assets/seo/company.png'
    ),
    url: Location.joinWithSlash(environment.siteUri, impactivRoutes.company),
    description:
      'Plus d’un million de convives utilisent déjà nos solutions au quotidien. Comme eux, poursuivez votre développement en adoptant nos solutions',
  },
  contact: {
    title: 'Contactez nos experts',
    type: 'website',
    image: Location.joinWithSlash(
      environment.siteUri,
      'assets/seo/contact.png'
    ),
    url: Location.joinWithSlash(environment.siteUri, impactivRoutes.contact),
    description:
      'Plus d’un million de convives utilisent déjà nos solutions au quotidien. Comme eux, poursuivez votre développement en adoptant nos solutions',
  },
  mentionsLegales: {
    title: 'Mentions Légales',
    type: 'website',
    image: '',
    url: Location.joinWithSlash(
      environment.siteUri,
      impactivRoutes.mentionsLegales
    ),
    description: '',
  },
  useCase: null,
  notFound: null,
};
