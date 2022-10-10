import { Location } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface OgMeta {
  title: string;
  type: 'website';
  image: string;
  url: string;
  description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(Location) private location: Location
  ) {
    this.urlChanges$ = new BehaviorSubject<string>(
      Location.joinWithSlash(environment.siteUri, this.location.path())
    );
    this.location.onUrlChange((url) =>
      this.urlChanges$.next(Location.joinWithSlash(environment.siteUri, url))
    );
  }

  urlChanges$: BehaviorSubject<string>;

  updateTitle(title: string): void {
    this.title.setTitle(title);
  }

  updateDescription(desc: string): void {
    this.meta.updateTag({ name: 'description', content: desc });
  }

  /**
   * Updates the metadata with Open Graph protocol https://ogp.me/
   * @param og metadata properties
   */
  updateOg(og: OgMeta): void {
    this.meta.updateTag({ name: 'og:locale', content: 'fr_FR' });
    this.meta.updateTag({ name: 'og:title', content: og.title });
    this.meta.updateTag({ name: 'og:type', content: og.type });
    this.meta.updateTag({ name: 'og:image', content: og.image });
    this.meta.updateTag({ name: 'og:url', content: og.url });
    if (og.description) {
      this.meta.updateTag({ name: 'og:description', content: og.description });
    } else {
      this.meta.removeTag('description');
    }
  }

  setPageSeo(og: Required<OgMeta>): void {
    this.updateTitle(og.title);
    this.updateDescription(og.description);
    this.updateOg(og);
  }

  setNoIndex(): void {
    this.meta.addTag({ name: 'robots', content: 'noindex, nofollow' });
  }

  removeNoIndex(): void {
    this.meta.removeTag('robots');
  }
}
