import { CartItem } from "./cart-item.js";

class CartItemCollection {

    _products; // tableau de Product

    constructor(){

        this._products = [];
    }

    _add(p){
        if ( p instanceof CartItem) // prevent from adding object that are not CartItem instances
            this._products.push(p);
    }

    _modify(p, q){
        if (p instanceof CartItem) {
            let index = this._products.findIndex(item => item === p);
    
            if (index !== -1) {
                p._quantity = q;
                this._products[index] = p;
            }
        }
    }

    _remove(p) {
        if (p instanceof CartItem) {
            let index = this._products.findIndex(item => item === p);
    
            if (index !== -1) {
                this._products.splice(index, 1);
            }
        }
    }

    find(id){
        return this._products.find( p => p._product.getId()==id );
        
    }


    findAll(){
        return this._products;
    }


}

export {CartItemCollection}