import { ProductCollection } from "./class/product-manager.js";
import { CartItemCollection } from "./class/cart.js";

import { getRequest } from "./api-queries.js";

import { CartItem } from "./class/cart-item.js";

import { productRenderer } from "./renderer/product-renderer.js";
import { orderRenderer } from "./renderer/order-renderer.js";
import { orderTotalRenderer } from "./renderer/order-renderer.js";
       

 let M = {
     products: new ProductCollection(),
     cart: new CartItemCollection()
 }

 let V = {}

 V.render = function(data){
    // le produits sont affichés dans section
    document.querySelector("#menu").innerHTML = productRenderer(data);
    document.querySelector("#order-list").innerHTML = orderRenderer(data);
 }

 V.renderOrder = function(data){
    document.querySelector("#order-list").innerHTML = orderRenderer(data);
    document.querySelector("#total").innerHTML = orderTotalRenderer(data)
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

V.showOrder = function (){
    let order = document.querySelector('#order-info');
    
    order.classList.remove("hidden");
    order.classList.add("flex");
}

V.closeOrder = function (){
    let order = document.querySelector('#order-info');

    order.classList.remove("flex");
    order.classList.add("hidden");

}

 V.init = function(){
    let filtres = document.querySelector('#filters');
    filtres.addEventListener('click', C.handler_clickOnFilter);

    let cards = document.querySelector('#menu');
    cards.addEventListener('click',  C.handler_clickOnMenuItem);
    cards.addEventListener('click',  C.handler_clickOnOption);
    cards.addEventListener('click',  C.handler_clickOnAddToOrder);

    let order = document.querySelector('#order');
    order.addEventListener('click',  C.handler_clickOnOrder);
    order.addEventListener('click',  C.handler_clickOnBtnQuantity);
    order.addEventListener('click',  C.handler_clickOnDelete);
 }

 
let C = {}

 C.init = async function(){
    V.init();
     let nb = await M.products.load("https://mmi.unilim.fr/~toutain4/api/products");
     console.log(nb + " products added in the ProductCollection");

     V.render( M.products.findAll() );

      // code du menu burger
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const bodyNav = document.getElementById('body-nav');
        
    menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden'); bodyNav.classList.toggle('overflow-y-hidden')});

     
    
 }

 C.handler_clickOnFilter = function(ev){
    if ( ev.target.dataset.filter != undefined )
    {
        if ( ev.target.dataset.filter == 0 ){
            V.render( M.products.findAll() );
            V.renderOrder(M.cart.findAll())
        }
        else {
            V.render( M.products.findByCategory(ev.target.dataset.filter)); 
            V.renderOrder(M.cart.findAll())
        }
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
            return

        }
        if(ev.target.dataset.option == "selected"){ 
            V.removeAnOption(ev.target)
        }

        
    }
}

C.handler_clickOnAddToOrder = function(ev){
    if ( ev.target.id == "order-add" )
    {   
        let infoContent = ev.target.parentNode 
        let alloption1 = infoContent.querySelectorAll('#option')
        
        let optionSelected = [];

        for (let option of alloption1){
            if(option.dataset.option == "selected" ){
                optionSelected.push(option.innerText)
            }
        }

        let value = ev.target.dataset.order
        M.cart._add(new CartItem(M.products.find(value), 1, optionSelected));

        V.renderOrder(M.cart.findAll())

        
    }
}

C.handler_clickOnOrder = function(ev){

    
    if (ev.target.dataset.id == "order")
    {
        V.showOrder();
    }

    if (ev.target.dataset.id == "close-order")
    {
        V.closeOrder();
    }
    
}

C.handler_clickOnBtnQuantity = function(ev){

    
    if (ev.target.id == "btn-add")
    {
        let value = ev.target.dataset.prorder
        let quantity = M.cart.find(value)._quantity
        quantity += 1 

        M.cart._modify(M.cart.find(value), quantity)
        V.renderOrder(M.cart.findAll())

    }

    if (ev.target.id == "btn-dec")
    {
        let value = ev.target.dataset.prorder
        let quantity = M.cart.find(value)._quantity
        quantity += -1 
        
        if(quantity > 0){
            M.cart._modify(M.cart.find(value), quantity)
            V.renderOrder(M.cart.findAll())
            
        }
        else{
            M.cart._remove(M.cart.find(value))
            V.renderOrder(M.cart.findAll())
        }
    }
    
}

C.handler_clickOnDelete = function(ev) {
    if (ev.target.id == "btn-delete"){
        let value = ev.target.dataset.prorder

        M.cart._remove(M.cart.find(value))
        V.renderOrder(M.cart.findAll())

    }
}


C.init();
