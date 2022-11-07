import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UseCase } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UseCaseService {
  constructor(private http: HttpClient) {}
  private readonly request = this.http
    .get<UseCase[]>(environment.useCaseUri)
    .pipe(shareReplay());

  getUseCases$() {
    return this.request;
  }
}
