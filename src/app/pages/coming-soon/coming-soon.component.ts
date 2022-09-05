import { Component, OnInit } from '@angular/core';
import { MatomoService } from 'src/app/services';
import { impactivRoutes } from 'src/app/services/config';

@Component({
  selector: 'impactiv-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
})
export class ComingSoonComponent implements OnInit {
  email = '';

  name = 'bonjour';
  domain = 'impactiv.fr';

  constructor(private matomoService: MatomoService) {}

  ngOnInit(): void {
    this.matomoTrack();
  }

  private matomoTrack(): void {
    this.matomoService.trackPageView({
      title: 'Coming Soon',
      url: impactivRoutes.comingSoon,
    });
  }
}
