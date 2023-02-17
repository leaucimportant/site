import { HttpStatusCode } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { first, map, switchMap } from 'rxjs';
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
    private contactService: ContactService,
    private ref: ChangeDetectorRef
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
  success = false;
  isLoading = false;
  successGif = 'assets/images/forms/success.gif';
  errorGif = 'assets/images/forms/error.gif';
  successMessage = $localize`:Text|contact success message@@CONTACT-SUCCESS-RESPONSE:`;
  continueMessage = $localize`:Text|contact continue message@@CONTACT-CONTINUE:`;
  tryAgainMessage = $localize`:Text|contact try again message@@CONTACT-TRY-AGAIN:`;

  subjects = [
    $localize`:Text|contact item subject@@CONTACT-SUBJECT-PARTNERSHIP:`,
    $localize`:Text|contact item subject@@CONTACT-SUBJECT-POSTULATE:`,
    $localize`:Text|contact item subject@@CONTACT-SUBJECT-DISCUSS:`,
    $localize`:Text|contact item subject@@CONTACT-SUBJECT-DEMO:`,
    $localize`:Text|contact item subject@@CONTACT-SUBJECT-HOTLINE:`,
    $localize`:Text|contact item subject@@CONTACT-SUBJECT-OTHER:`,
  ];

  errorMessage = (status: number) => {
    return status === HttpStatusCode.TooManyRequests
      ? $localize`:Text|contact many try message@@CONTACT-MANY-TRY:`
      : $localize`:Text|contact error server message@@CONTACT-ERROR-SERVER:`;
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
          this.form.controls['subject'].patchValue(
            $localize`:Text|contact item subject@@CONTACT-SUBJECT-DEMO:`
          );
        if (data.askJoinUs)
          this.form.controls['subject'].patchValue(
            $localize`:Text|contact item subject@@CONTACT-SUBJECT-POSTULATE:`
          );
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
      this.isLoading = true;
      this.recaptchaV3Service
        .execute('contact')
        .pipe(
          switchMap((token) =>
            this.contactService.sendContactForm({
              ...this.form.getRawValue(),
              token,
            })
          )
        )
        .subscribe({
          next: this.submitSuccess,
          error: this.submitError,
        });
    }
  }

  private submitSuccess = () => {
    this.success = true;
    this.isLoading = false;
    this.ref.detectChanges();
  };

  private submitError = (response: any) => {
    console.log(response);
    this.errorMsg = response.error.statusCode
      ? this.errorMessage(response.error.statusCode)
      : JSON.stringify(response);
    this.success = false;
    this.isLoading = false;
    this.ref.detectChanges();
  };

  onCloseModal(success: boolean) {
    if (success) this.form.reset();
    this.success = false;
    this.errorMsg = undefined;
  }
}
