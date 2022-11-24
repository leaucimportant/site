import { HttpStatusCode } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { first, map, Observable, switchMap } from 'rxjs';
import {
  Config,
  ContactService,
  MatomoService,
  SeoService,
} from 'src/app/services';

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
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private window: Window,
    private recaptchaV3Service: ReCaptchaV3Service,
    private contactService: ContactService
  ) {}

  phone = '';
  phoneAreaCode = '+339';
  phoneStart = '5333';
  phoneEnd = '0360';
  errorMsg?: string;
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
    subject: new FormControl(''),
    company: new FormControl(''),
    phone: new FormControl(''),
  });

  submitted = false;
  response$?: Observable<{
    statusCode: number;
  }>;

  successGif = 'assets/images/forms/success.gif';
  errorGif = 'assets/images/forms/error.gif';

  message = (status: number) => {
    if (status === HttpStatusCode.Created)
      return 'Votre message a bien été envoyé';
    if (status === HttpStatusCode.TooManyRequests)
      return "Trop d'essais. Veuillez réessayer plus tard";
    return 'Erreur Serveur. Veuillez réessayer plus tard';
  };

  ngOnInit(): void {
    this.setSeo();
    this.matomoTrack();
    this.initializeForm();
    this.route.paramMap
      .pipe(
        first(),
        map(() => this.window.history.state)
      )
      .subscribe((data) => {
        if (data.askDemo)
          this.form.controls['subject'].patchValue('Demander une démo');
        if (data.askJoinUs)
          this.form.controls['subject'].patchValue('Postuler');
      });
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

  validateForm(): boolean {
    return this.f['phone'].value
      ? this.form.valid
      : !this.f['name'].invalid &&
          !this.f['email'].invalid &&
          !this.f['subject'].invalid;
  }

  submit() {
    this.submitted = true;
    if (this.validateForm()) {
      this.response$ = this.recaptchaV3Service.execute('contact').pipe(
        switchMap((token) =>
          this.contactService.sendContactForm({
            ...this.form.getRawValue(),
            token,
          })
        )
      );
    }
  }

  onCloseModal(code: number) {
    if (code === HttpStatusCode.Created) this.form.reset();
    this.response$ = undefined;
  }
}
