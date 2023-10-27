/**
 *  Les classes existent aussi en Javascript comme dans tous les langages orientés objets.
 * 
 *  Au besoin, vous avez tout ici : https://fr.javascript.info/classes
 *  Ou là : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes
 * 
 * 
 *  Il existe quelques différences de syntaxe et le support des propriétés privées est 
 *  relativement récent donc pas pris en charge pas des navigateurs plus anciens. Mais
 *  Toutes les versions de navigateurs sorties depuis 2021 les supportent donc vous
 *  pouvez vous en servir.
 * 
 */

class Product {
    _id;
    _name;
    _price;
    _image;
    _idcategory;
    _size;
    _sauce;
    _ice;
    _cream;
    _stock;

    constructor(id, name, price, image, idcat, size, sauce, ice, cream, stock){
        this._id = id;
        this._name = name;
        this._price = price;
        this._image = image;
        this._idcategory = idcat;
        this._size = JSON.parse(size);
        this._sauce = JSON.parse(sauce);
        this._ice = JSON.parse(ice);
        this._cream = JSON.parse(cream);
        this._stock = stock;
    }

    getId(){
        return this._id;
    }

    getName(){
        return this._name;
    }

    getPrice(){
        return this._price;
    }

    getImage(){
        return this._image;
    }

    getIdCategory(){
        return this._idcategory;
    }

    getSize(){
        return this._size;
    }

    getSauce(){
        return this._sauce;
    }

    getIce(){
        return this._ice;
    }

    getCream(){
        return this._cream;
    }

    getStock(){
        return this._stock;
    }

}

export {Product};