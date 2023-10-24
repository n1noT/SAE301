/*

let M = {};

async function getData() {
    data = await getRequest("https://mmi.unilim.fr/~toutain4/api/products");
    console.log("Données récupérées avec succès : ", data);
    
    return data
}
  
M.data = getData();

let V = {};

V.formatOneItem = function (data){
    let template = document.querySelector('#template-product');
    console.log(template)
    let html = template.innerHTML;

    html = html.replace("{{nom}}", data.name);
    html = html.replace("{{url-image}}", data.image);
    html = html.replace("{{prix}}" + " €", data.price);
    html = html.replace("{{url-category}}", data.icon);

    return html
}

V.renderMenu = async function (data){

    let menu = "";

    for (let i=0; i<data.length; i++){
        menu += V.formatOneItem(data[i]);
        console.log(menu)
    }

    let section = document.querySelector("#menu");
    section.innerHTML = menu;
}

let C = {};

C.init = async function() {
    console.log("oui");
    V.renderMenu(M.data);
    
}

C.init();

*/
let V = {};

V.formatOneItem = function (data){
    let template = document.querySelector('#template-product');
    console.log(data)
    let html = template.innerHTML;

    html = html.replace("{{nom}}", data.name);
    html = html.replace("{{prix}}", data.price);
    html = html.replace("{{url-image}}", data.image);
    html = html.replace("{{category}}", data.category);

    return html
}

V.renderMenu = async function (data){

    let menu = "";

    for (let i=0; i<data.length; i++){
        menu += V.formatOneItem(data[i]);
    }

    let section = document.querySelector("#menu");
    section.innerHTML = menu;
}

async function getData() {
    data = await getRequest("https://mmi.unilim.fr/~toutain4/api/products");
    // console.log("Données récupérées avec succès : ", data);
    
    V.renderMenu(data);

}


getData();