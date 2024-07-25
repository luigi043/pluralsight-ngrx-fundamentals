import { createAction, createReducer, on } from "@ngrx/store";
import { ProductsAPIActions,ProductsPageAction } from "./products.actions";
import { stagger, state } from "@angular/animations";
import { Product } from "../product.model";

export interface ProductsState{
    showProductCode: boolean;
    loading: boolean;
    products: Product[];
}

const initialState: ProductsState = {
    showProductCode: true,
    loading: false,
    products: [],
}
export const productsReducer = createReducer(
    initialState,
    on(createAction('[Products Page] Toggle show Product Code'), (state)=>({
        ...state, 
        showProductCode: !state.showProductCode
    })),
    on (ProductsPageAction.loadProducts, (state) =>({
        ...state,
        loading:true, 
    })),
    on(ProductsAPIActions.productsLoadedSucess, (state, {products}) => ({ 
        ...state,
        loading:  false,
        products 
    }))
);