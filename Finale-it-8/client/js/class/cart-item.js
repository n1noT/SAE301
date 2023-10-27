class CartItem {
    _product;
    _quantity;
    _options;

    constructor(product, quantity, options){
        this._product = product;
        this._quantity = quantity;
        this._options = options;
        
    }

    getProduct(){
        return this._product;
    }

    getQuantity(){
        return this._quantity;
    }

    // setQuantity(quantity){
    //     this._quantity = quantity;
    //     return this._quantity;
    // }
    
    getOptions(){
        return this._options;
    }

}

export {CartItem};