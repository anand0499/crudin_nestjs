import { BadGatewayException, Injectable, NotFoundException } from "@nestjs/common";
import { Products } from "./products.model";

@Injectable()
export class ProductsService{
    products:Products[]=[];

    insertProducts(title:string,desc:string,price:number){
        const id=Math.random().toString();
        const newProduct=new Products(id,title,desc,price);
        this.products.push(newProduct);
        // console.log("Products",this.products);
        return "Added Successfully into the products"
    }

    getProducts(){
        return [...this.products];
    }

    getSingleProducts(productId:string){
        const product=this.findProducts(productId)[0];
        return {...product}; 
    }

    updateTheProducts(prodId:string,title:string,desc:string,price:number){
        const [product,index]=this.findProducts(prodId); 
        const updatedProduct={...product};
        console.log("Not updated ",this.updateTheProducts);
        
        if(title){
            updatedProduct.title=title;
        }
        if(desc){
            updatedProduct.desc=desc;
        }
        if(price){
            updatedProduct.price=price;    
        }
        this.products[index]=updatedProduct;
        console.log("updated",this.products[index])
        return this.products[index];
    }

    deleteProducts(prodId:string){
        // const [product,productIndex]=this.findProducts(prodId);
        const index=this.findProducts(prodId)[1];
        this.products.splice(index,1);
        return this.products;
        
    }


    private findProducts(id:string):[Products,number]{
        const productIndex=this.products.findIndex(prod=>prod.id===id);
        const product=this.products[productIndex];
        if(!product){
            throw new NotFoundException("Product id not found")
        }
        return [product,productIndex];
    }
}