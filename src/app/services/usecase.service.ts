import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { UseCase } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UseCaseService {
  constructor(private http: HttpClient) {}

  useCases: UseCase[] = [];

  async getUseCases() {
    if (!this.useCases.length) {
      this.useCases = await lastValueFrom(
        this.http.get<UseCase[]>(
          'https://impactiv.s3.fr-par.scw.cloud/siteweb/casclients.json'
        )
      );
    }
    return this.useCases;
  }

  async getUseCase(id: string) {
    if (!this.useCases.length) {
      this.useCases = await lastValueFrom(
        this.http.get<UseCase[]>(
          'https://impactiv.s3.fr-par.scw.cloud/siteweb/casclients.json'
        )
      );
    }
    return this.useCases.filter((usecase) => usecase.id === id)[0] ?? null;
  }
}
