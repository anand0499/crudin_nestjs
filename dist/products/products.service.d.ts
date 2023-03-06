import { Products } from "./products.model";
export declare class ProductsService {
    products: Products[];
    insertProducts(title: string, desc: string, price: number): string;
    getProducts(): Products[];
    getSingleProducts(productId: string): {
        id: string;
        title: string;
        desc: string;
        price: number;
    };
    updateTheProducts(prodId: string, title: string, desc: string, price: number): Products;
    deleteProducts(prodId: string): Products[];
    private findProducts;
}
