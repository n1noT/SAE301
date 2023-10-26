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


    
}

export {CartItemCollection}
