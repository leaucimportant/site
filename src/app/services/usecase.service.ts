import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { UseCase } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UseCaseService {
  constructor(private http: HttpClient) {}
  private readonly request = this.http
    .get<UseCase[]>(
      'https://impactiv.s3.fr-par.scw.cloud/siteweb/casclients.json'
    )
    .pipe(shareReplay());

  getUseCases$() {
    return this.request;
  }
}
