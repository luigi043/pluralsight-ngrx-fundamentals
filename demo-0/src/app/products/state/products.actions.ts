import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Product } from "../product.model";

export const ProductsPageAction = createActionGroup({
    source: ' Products Page ',
    events: { 
        'Toggle show Product Code': emptyProps(),
        'Load Products':  emptyProps(),
       
    }
});

export const ProductsAPIActions = createActionGroup({
    source: 'Products API', 
    events: {
        'Products Loaded Sucess': props<{products: Product[]}>(),
        'Products Loaded Fail': props<{message: string }>(),
        'Products Added Sucess': props<{products: Product }>(),
        'Products Added Fail': props<{ products: string }>(),
        'Products Updated Sucess': props<{ products: Product }>(),
        'Products Updated Fail': props<{ message: string }>(),
        'Products Deleted Sucess': props<{ id: number }>(),
        'Products Deleted Fail': props<{ products: string }>(),
    }
}) 