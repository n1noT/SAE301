
let formatOneItem = function (data){
    let template = document.querySelector('#template-product');
    let html = template.innerHTML;

    html = html.replace("{{nom}}", data.name);
    html = html.replace("{{url-image}}", data.image);
    html = html.replace("{{prix}}", data.price + " €");
    html = html.replace("{{category}}", data.category);

    return html
}

let renderMenu = function (data){

    let menu = "";

    for (let i=0; i<data.length; i++){
        menu += formatOneItem(data[i]);

    }

    let section = document.querySelector("#menu");
    section.innerHTML = menu;
}

export {renderMenu};