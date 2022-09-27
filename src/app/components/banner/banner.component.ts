import { Component, Input } from '@angular/core';

@Component({
  selector: 'impactiv-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() banner!: { title: string; description: string };
}
