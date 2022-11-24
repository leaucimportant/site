import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContactForm } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  sendContactForm(contactForm: ContactForm) {
    return this.http.post<{
      statusCode: number;
    }>(environment.contactUri, contactForm);
  }
}
