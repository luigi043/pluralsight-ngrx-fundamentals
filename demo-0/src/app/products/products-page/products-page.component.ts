import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { sumProducts } from 'src/app/utils/sum-products';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { ProductsAPIActions, ProductsPageAction } from '../state/products.actions';
import { state } from '@angular/animations';
import { selectProducts, selectProductsLoading, selectProductsTotal } from '../state/products.selector';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent {
  products$ = this.store.select(selectProducts);
  total$ = this.store.select(selectProductsTotal);
  loading$ = this.store.select(selectProductsLoading);
  showProductCode$ = this.store.select(
    (state:any) => state.product.showProductCode
  );
  errorMessage = '';

  constructor(private productsService: ProductsService, private store: Store) {
    this.store.subscribe((store)=> console.log(store));
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.store.dispatch(ProductsPageAction.loadProducts());
    this.productsService.getAll().subscribe({
      next: (products) => {
        this.store.dispatch(
          ProductsAPIActions.productsLoadedSucess({products})
        );
      },
      error: (error) => (this.errorMessage = error),
    });
  }

  toggleShowProductCode() {
    this.store.dispatch(ProductsPageAction.toggleShowProductCode());
  }
}
