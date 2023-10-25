import { ProductCollection } from "./class/product-manager.js";
import { productRenderer } from "./renderer/product-renderer.js";
       

 let M = {
     products: new ProductCollection()
 }

 let V = {}

 V.render = function(data){
    // le produits sont affichés dans section
    document.querySelector("#menu").innerHTML = productRenderer(data);
 }

 V.init = function(){
    let filtres = document.querySelector('#filters');
    filtres.addEventListener('click', C.handler_clickOnFilter);
 }

 let C = {}

 C.init = async function(){
    V.init();
     let nb = await M.products.load("https://mmi.unilim.fr/~toutain4/api/products");
     console.log(nb + " products added in the ProductCollection");
     V.render( M.products.findAll() );
    
 }

 C.handler_clickOnFilter = function(ev){
    if ( ev.target.dataset.filter != undefined )
    {
        V.render( M.products.findByCategory(ev.target.dataset.filter)); 
    }
 }

C.init();




