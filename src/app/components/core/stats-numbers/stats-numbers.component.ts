import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import {
  animationFrameScheduler,
  BehaviorSubject,
  combineLatest,
  debounceTime,
  interval,
  takeWhile,
  map,
  of,
  switchMap,
  endWith,
  distinctUntilChanged,
} from 'rxjs';
import { IdService } from 'src/app/services/id.service';

@Component({
  selector: 'impactiv-stats-numbers',
  templateUrl: './stats-numbers.component.html',
  styleUrls: ['./stats-numbers.component.scss'],
})
export class StatsNumbersComponent
  implements AfterViewInit, OnInit, OnDestroy, OnChanges
{
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private idService: IdService
  ) {
    this.intersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) =>
        entries.forEach(this.animateEntry)
    );
  }

  ngOnInit(): void {}
  @Input() data!: number;
  statsNumberId = `statsNumberId-${this.idService.getNextId()}`;
  private intersectionObserver: IntersectionObserver;
  private readonly count$ = new BehaviorSubject(0);
  private readonly duration$ = new BehaviorSubject(0);
  private isObserving = false;

  ngOnDestroy(): void {
    this.count$.complete();
    this.duration$.complete();
  }

  ngAfterViewInit(): void {
    this.isObserving = this.startObserving();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.count$.next(this.data);
      this.isObserving = this.startObserving();
    }
  }

  private startObserving(): boolean {
    if (this.isObserving) {
      return true;
    }
    if (!this.data) {
      return false;
    }
    const htmlElement = this.document.getElementById(this.statsNumberId);
    if (htmlElement) {
      this.intersectionObserver.observe(htmlElement);
      return true;
    }
    return false;
  }

  private readonly animateEntry = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      this.duration$.next(1000);
      this.intersectionObserver.unobserve(entry.target);
      this.isObserving = false;
    }
  };

  readonly currentCount$ = combineLatest([this.count$, this.duration$]).pipe(
    debounceTime(100),
    switchMap(([count, duration]) => {
      // if duration is zero, do not animate
      if (!duration) {
        return of(count);
      }
      // get the time when animation is triggered
      const startTime = animationFrameScheduler.now();
      return interval(0, animationFrameScheduler).pipe(
        // calculate elapsed time
        map(() => animationFrameScheduler.now() - startTime),
        // calculate progress
        map((elapsedTime) => elapsedTime / duration),
        // complete when progress is greater than 1
        takeWhile((progress) => progress <= 1),
        // apply quadratic ease-out
        // for faster start and slower end of counting
        map((x: number): number => x * (2 - x)),
        // calculate current count
        map((progress) => Math.round(progress * count)),
        // make sure that last emitted value is count
        endWith(count),
        distinctUntilChanged()
      );
    })
  );
}
