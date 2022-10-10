import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { MatomoService, Config } from 'src/app/services';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'impactiv-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private matomoService: MatomoService
  ) {}
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
    activity: new FormControl(''),
    company: new FormControl(''),
    phone: new FormControl(''),
  });

  submitted = false;

  ngOnInit(): void {
    this.setSeo();
    this.matomoTrack();
  }

  private setSeo(): void {
    if (Config.seoMeta.contact) {
      this.seoService.setPageSeo(Config.seoMeta.contact);
    } else {
      console.warn('missing seoMeta.contact');
    }
  }

  private matomoTrack(): void {
    if (Config.seoMeta.contact) {
      this.matomoService.trackPageView(Config.seoMeta.contact);
    } else {
      console.warn('missing seoMeta.contact');
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  submit() {
    console.log(this.form);
  }
}
