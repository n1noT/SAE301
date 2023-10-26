



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
    #id;
    #name;
    #price;
    #image;
    #idcategory;
    #size;
    #sauce;
    #ice;
    #cream;
    #stock;

    constructor(id, name, price, image, idcat, size, sauce, ice, cream, stock){
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#image = image;
        this.#idcategory = idcat;
        this.#size = JSON.parse(size);
        this.#sauce = JSON.parse(sauce);
        this.#ice = JSON.parse(ice);
        this.#cream = JSON.parse(cream);
        this.#stock = stock;
        
    }

    getId(){
        return this.#id;
    }

    getName(){
        return this.#name;
    }

    getPrice(){
        return this.#price;
    }

    getImage(){
        return this.#image;
    }

    getIdCategory(){
        return this.#idcategory;
    }

    getSize(){
        return this.#size;
    }

    getSauce(){
        return this.#sauce;
    }

    getIce(){
        return this.#ice;
    }

    getCream(){
        return this.#cream;
    }

    getStock(){
        return this.#stock;
    }

}

export {Product};