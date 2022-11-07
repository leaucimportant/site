import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
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
import { catchError, first, map, of, switchMap } from 'rxjs';
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
  errorString = (error: HttpErrorResponse) => {
    if (error?.status) {
      if (error.status === HttpStatusCode.TooManyRequests)
        return "Trop d'essais. Veuillez réessayer plus tard";
      if (
        error.status === HttpStatusCode.InternalServerError ||
        error.status === HttpStatusCode.BadGateway ||
        error.status === HttpStatusCode.ServiceUnavailable ||
        error.status === HttpStatusCode.GatewayTimeout
      )
        return 'Erreur Serveur. Veuillez réessayer plus tard';
    }
    if (error?.message) {
      return error.message;
    }
    return JSON.stringify(error);
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
      this.recaptchaV3Service
        .execute('contact')
        .pipe(
          switchMap((token) => {
            return this.contactService.sendContactForm({
              ...this.form.getRawValue(),
              token,
            });
          }),
          catchError((error) => {
            this.errorMsg = this.errorString(error);
            return of({ message: this.errorMsg, hasError: true });
          })
        )
        .subscribe({
          next: this.submitSuccess,
          error: this.submitErrorToken,
          complete: this.submitCompleted,
        });
    }
  }

  private submitSuccess = (result?: {
    message?: string;
    hasError?: boolean;
  }) => {
    console.log(result?.hasError);

    setTimeout(() => {
      this.window.alert(result?.message || 'Le mail est parti');
    });
  };

  private submitErrorToken = (error: HttpErrorResponse) => {
    this.errorMsg = this.errorString(error);
    console.log('here');
    setTimeout(() => {
      this.window.alert(this.errorMsg);
    });
  };

  private submitCompleted = () => {
    this.errorMsg = undefined;
  };
}
