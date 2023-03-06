import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController{
    constructor(private readonly productsService:ProductsService){}

    @Post()
    addProducts(
        @Body('title') prodTitle:string,
        @Body('desc') prodDesc:string,
        @Body('price') prodPrice:number
    ):any{
        return this.productsService.insertProducts(prodTitle,prodDesc,prodPrice)
    }

    @Get()
    getProducts():any{
        return this.productsService.getProducts();
    }

    @Get(":id")
    getSingleProducts(@Param('id') prodId:string){
        return this.productsService.getSingleProducts(prodId);
    } 

    @Patch(":id")
    updateProducts(
        @Param('id') prodId:string,
        @Body('title') prodTitle:string,
        @Body('desc') prodDesc:string,
        @Body('number') prodPrice:number 
    ){
        return this.productsService.updateTheProducts(prodId,prodTitle,prodDesc,prodPrice);
    }

    @Delete(":id")
    deleteSingleProducts(@Param('id') prodId:string){
        return this.productsService.deleteProducts(prodId);
    }
}