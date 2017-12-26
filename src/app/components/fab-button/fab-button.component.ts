import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';

import { lastActivatedRouteData } from '@rxjs/index';
import { FabButtonService } from './fab-button.service';

interface FabConfig {
  icon: string;
  isVisible: boolean;
}

@Component({
  selector: 'tq-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss'],
})
export class FabButtonComponent implements OnInit {
  fabConfig$: Observable<FabConfig>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fabService: FabButtonService,
  ) {}

  ngOnInit() {
    this.fabConfig$ = this.router.events.pipe(
      lastActivatedRouteData(this.activatedRoute),
      map(({ fabIcon, hideFab }): FabConfig => ({
        icon: fabIcon || 'favorite',
        isVisible: !!!hideFab,
      })),
    );
  }

  onFab() {
    this.fabService.fabSource.next();
  }
}