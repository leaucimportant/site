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
      this.useCases = (
        await lastValueFrom(
          this.http.get<UseCase[]>(
            'https://impactiv.s3.fr-par.scw.cloud/siteweb/casclients.json'
          )
        )
      ).sort((a, b) => (a.rank > b.rank ? 1 : -1));
    }
    return this.useCases;
  }

  async getUseCasesName() {
    if (!this.useCases.length) {
      this.useCases = await lastValueFrom(
        this.http.get<UseCase[]>(
          'https://impactiv.s3.fr-par.scw.cloud/siteweb/casclients.json'
        )
      );
    }
    return this.useCases
      .sort((a, b) => (a.rank > b.rank ? 1 : -1))
      .map((useCase) => ({
        name: useCase.name,
        slug: useCase.slug,
        logo: useCase.quote.logo,
      }));
  }

  async getUseCase(slug: string) {
    if (!this.useCases.length) {
      this.useCases = await lastValueFrom(
        this.http.get<UseCase[]>(
          'https://impactiv.s3.fr-par.scw.cloud/siteweb/casclients.json'
        )
      );
    }
    return this.useCases.filter((usecase) => usecase.slug === slug)[0] ?? null;
  }
}
