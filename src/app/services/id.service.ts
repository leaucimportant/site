import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdService {
  private id = 0;

  getNextId(): number {
    return this.id++;
  }
}
