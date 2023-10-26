import { Product } from "./product.js";
import { getRequest, postRequest } from "../api-queries.js";

class ProductCollection {

    _uri; // pour mémoriser l'uri utilisée pour chargée les produits (peut être utile si refresh, enregistrement de produit etc...)
    _products; // tableau de Product

    constructor(){
        this._uri = "";
        this._products = [];
    }

    async load(uri){
        this._uri = uri;
        let objects = await getRequest(uri);
        for(let item of objects){
            let p = new Product(item.id_product, item.name, item.price, item.image, item.category, item.size, item.sauce, item.ice, item.cream, item.stock);
            this._add(p);1
        }
        return this._products.length;
    }

    // _ marche aussi sur les méthodes
    _add(p){
        if ( p instanceof Product) // prevent from adding object that are not Product instances
            this._products.push(p);
    }

    async create(name, idcat){
        if (this._uri == "" ){
            console.log("Warning, the api server uri is not set.");
        }
        let object = await postRequest(this._uri, {name: name, category: idcat});
        if (object){
            this._add(new Product(object.id_product, object.name, object.category));
        }
        else{
            console.log("Fail to create the Product");
        }
    }

    find(id){
        return this._products.find( p => p.getId()==id );
    }

    findAll(){
        return this._products;
    }

    findByCategory(idcat){
        return this._products.filter( p => p.getIdCategory()==idcat);
    }
}

export {ProductCollection}

