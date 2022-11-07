import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContactForm } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  async sendContactForm(
    contactForm: ContactForm
  ): Promise<{ statusCode: number; message: string; error: string }> {
    return await lastValueFrom(
      this.http.post<{ statusCode: number; message: string; error: string }>(
        environment.contactUri,
        contactForm
      )
    );
  }
}
