import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { NavigationService } from '@banshop/core/navigation/service';
import { isNotNullOrUndefined } from '@banshop/core/utils/operators';
import { Product } from '@banshop/products/common';
import { ProductFacade } from '@banshop/products/state';

@Component({
  selector: 'banshop-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent implements OnInit {
  product$!: Observable<Product>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly productFacade: ProductFacade,
    private readonly navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    const { slug } = this.activatedRoute.snapshot.params;

    if (!slug) {
      this.redirect();
    }

    this.product$ = this.productFacade.productBySlug$(slug).pipe(
      tap((product) => {
        if (!product) {
          this.redirect(slug);
        }
      }),
      isNotNullOrUndefined()
    );
  }

  private redirect(path?: string): void {
    void this.navigationService.navigateByUrl(
      this.navigationService.getPaths().notFound,
      {},
      { queryParams: { path: path ? `/product/${path}` : undefined } }
    );
  }
}