import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Config, MatomoService, SeoService } from 'src/app/services';

@Component({
  selector: 'impactiv-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private matomoService: MatomoService,
    private formBuilder: FormBuilder
  ) {}
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
    subject: new FormControl(''),
    company: new FormControl(''),
    phone: new FormControl(''),
  });

  submitted = false;

  ngOnInit(): void {
    this.setSeo();
    this.matomoTrack();
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      subject: ['', [Validators.required]],
      message: [''],
      company: [''],
      phone: [
        '',
        [Validators.pattern(new RegExp(/^(0|\+33)[1-9]([-.: ]?[0-9]{2}){4}$/))],
      ],
    });
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
    this.submitted = true;
    if (this.form.valid) {
      console.log(this.form.getRawValue());
    }
  }
}
