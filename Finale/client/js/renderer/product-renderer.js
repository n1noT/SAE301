import { Product } from "../class/product.js";

const productTemplate = document.querySelector("#template-product").innerHTML;
  
// data attend un tableau de Product
let render = function(data){
  
    let html = "";
    let all = "";
    // on vérifie que data est bien est tableau
    if (data instanceof Array === false) { 
        console.error( "data has to be an array of Products");
        return all;
    }
    for(let p of data){
        // on vérifie que p est bien un Product
        if (p instanceof Product){
            html = productTemplate.replace("{{id}}", p.getId() );
            html = html.replace("{{nom}}", p.getName() );

            html = html.replace("{{url-image}}", p.getImage());
            html = html.replace("{{prix}}", p.getPrice() + " €");

            html = html.replace("{{category}}", p.getIdCategory() );
            all += html;
        }
    }

    return all;
 }

 export {render as productRenderer};