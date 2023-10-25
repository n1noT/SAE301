/* let M = {};

M.data = [
    {
        
    }
]

M.getArticleData = function(id){
    let article =  M.data.find( article => article.id==id );
    return structuredClone(article);
    
};

*/

let V = {};

V.showOptions = function (item){
    let card = document.querySelector(item);
    console.log(card)
    
    let allcard = document.querySelectorAll("#info");
    console.log(allcard);

    for (info of allcard){
        info.classList.remove("flex");
        info.classList.add("hidden");
    }

    let infoOf = card.querySelector("#info");
    console.log(infoOf)

    infoOf.classList.remove("hidden")
    infoOf.classList.add("flex");
}



V.closeOptions = function (item){
    let card = document.querySelector(item);
    console.log(card)
    
    card.classList.remove("flex");
    card.classList.add("hidden");

}

V.showOrder = function (){
    let order = document.querySelector('#order-info');
    
    order.classList.remove("hidden");
    order.classList.add("flex");
}

V.closeOrder = function (){
    let order = document.querySelector('#order-info');
    console.log('close');
    order.classList.remove("flex");
    order.classList.add("hidden");

}

V.init = function(){
    let all = document.querySelector('section');
    all.addEventListener('click',  C.handler_clickOnMenuItem);

    let btnOrder = document.querySelector('#order');
    btnOrder.addEventListener('click',  C.handler_clickOnOrder);
}


let C = {};

C.init = function(){
    V.init();
}

/* C.handler_clickOnMenuItem

*/


C.handler_clickOnMenuItem = function(ev){
    console.log(ev.target.dataset.id);
    
    if ( ev.target.dataset.id == "card" )
    {   
        V.showOptions('#card');
    }

    if (ev.target.dataset.id == "close")
    {
        V.closeOptions('#info');
    }
    
}

C.handler_clickOnOrder = function(ev){
    console.log(ev.target.dataset.id);
    
    if (ev.target.dataset.id == "order")
    {
        V.showOrder();
    }

    if (ev.target.dataset.id == "close-order")
    {
        V.closeOrder();
    }
    
}


/* Tout commence ici... */
C.init();


