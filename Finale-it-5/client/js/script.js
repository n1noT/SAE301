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
 
   
   let allcard = document.querySelectorAll("#info");

   for (let i=0; i<allcard.length;i++){
       allcard[i].classList.remove("flex");
       allcard[i].classList.add("hidden");
   }
   
   let infoOf = card.querySelector("#info");

   infoOf.classList.remove("hidden")
   infoOf.classList.add("flex");
}


V.closeOptions = function (){
    let allcard = document.querySelectorAll("#info");

   for (let i=0; i<allcard.length;i++){
       allcard[i].classList.remove("flex");
       allcard[i].classList.add("hidden");
   }

}

V.chooseAnOption = function (target){
    let allopt = target.parentNode.querySelectorAll("#option");

    for (let opt of allopt){
        opt.dataset.option ="not-selected";
        opt.classList.remove("bg-clr-background-secondary");
        opt.classList.add('bg-white')
    }

    target.dataset.option ="selected";
    target.classList.remove('bg-white')
    target.classList.add('bg-clr-background-secondary');

    console.log("add an option of :" + target)
}

V.removeAnOption = function (target){
    target.dataset.option ="not-selected";
    target.classList.remove('bg-clr-background-secondary')
    target.classList.add('bg-white')

    console.log("remove an option of :" + target)
}

 V.init = function(){
    let filtres = document.querySelector('#filters');
    filtres.addEventListener('click', C.handler_clickOnFilter);

    let cards = document.querySelector('#menu');
    cards.addEventListener('click',  C.handler_clickOnMenuItem);

    cards.addEventListener('click',  C.handler_clickOnOption);
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

   if ( ev.target.dataset.id == "produit" )
   {   
        let value = ev.target.id 
        V.showOptions(value);
   }

   if (ev.target.dataset.id == "close")
   {
        V.closeOptions();
   }

   
}

 C.handler_clickOnOption = function(ev){

   
if ( ev.target.id == "option" )
{   

    if(ev.target.dataset.option == "not-selected"){
        V.chooseAnOption(ev.target);
        return;

     }
     if(ev.target.dataset.option == "selected"){ 
        V.removeAnOption(ev.target)
     }

     
}

   
}

C.init();




