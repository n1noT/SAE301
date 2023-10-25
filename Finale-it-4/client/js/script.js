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

 V.showOptions = function (item){
   let card = document.querySelector('#' +  item);
   console.log(card);
   
   let allcard = document.querySelectorAll("#info");

   for (let i=0; i<allcard.length;i++){
       allcard[i].classList.remove("flex");
       allcard[i].classList.add("hidden");
   }
   
   let infoOf = card.querySelector("#info");
   // console.log(infoOf)

   infoOf.classList.remove("hidden")
   infoOf.classList.add("flex");
}


V.closeOptions = function (item){
    let allcard = document.querySelectorAll("#info");

   for (let i=0; i<allcard.length;i++){
       allcard[i].classList.remove("flex");
       allcard[i].classList.add("hidden");
   }

}

 V.init = function(){
    let filtres = document.querySelector('#filters');
    filtres.addEventListener('click', C.handler_clickOnFilter);

    let cards = document.querySelector('#menu');
    cards.addEventListener('click',  C.handler_clickOnMenuItem);
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

 C.handler_clickOnMenuItem = function(ev){
//     console.log(ev.target.id);
   
   if ( ev.target.dataset.id == "produit" )
   {   
        let value = ev.target.id 
        V.showOptions(value);
   }

   if (ev.target.dataset.id == "close")
   {
        // let value = ev.target
        V.closeOptions('#info');
   }
   
}

C.init();




