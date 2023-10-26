class CartItem {
    _product;
    _quantity;

    constructor(product, quantity){
        this._product = product;
        this._quantity = quantity;
        
    }

    getProduct(){
        return this._product;
    }

    getQuantity(){
        return this._quantity;
    }

}

export {CartItem};