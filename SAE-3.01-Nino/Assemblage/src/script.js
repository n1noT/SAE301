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

    let allcard = ev.target.parentNode.querySelectorAll("#info");

    for (info of allcard){
        info.classList.remove("flex");
        info.classList.add("hidden");
    }

    card.classList.add("flex");
}

V.init = function(){
    let menu = document.querySelector('nav');
    menu.addEventListener('click',  C.handler_clickOnMenuItem);
}


let C = {};

C.init = function(){

}

/* C.handler_clickOnMenuItem

*/


C.handler_clickOnMenuItem = function(ev){
    if ( ev.target.dataset.id != undefined )
    {   
        let value = ev.target.dataset.id;
        V.showOptions
    }
}



/* Tout commence ici... */
C.init();


