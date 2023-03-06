import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProducts(prodTitle: string, prodDesc: string, prodPrice: number): any;
    getProducts(): any;
    getSingleProducts(prodId: string): {
        id: string;
        title: string;
        desc: string;
        price: number;
    };
    updateProducts(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number): import("./products.model").Products;
    deleteSingleProducts(prodId: string): import("./products.model").Products[];
}
