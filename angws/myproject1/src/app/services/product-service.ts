export class ProductService{
private productsList:{name:string,price:number}[]=[{name:"Nut 3.0 mm",price:2.4},{name:"Screw 3.0 mm",price:4.5}];

getProducts(){
    return this.productsList;
}


addProduct(product:{name:string,price:number}){
    this.productsList.push(product);
    console.log(this.productsList);
    
}

}