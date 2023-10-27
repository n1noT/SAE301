import { CartItem } from "../class/cart-item.js";
import { Product } from "../class/product.js";

const productTemplate = document.querySelector("#order-template").innerHTML;

let renderOption = function(data) {
    let tmp = document.querySelector('#option-template');
    let shtml = tmp.innerHTML;

    let optionsHtml = ""; // Créez une chaîne vide pour stocker les options

    for (let option of data) {
        optionsHtml += shtml.replace("{{option}}", option);
    }

    return optionsHtml; // Retournez la chaîne contenant toutes les options
}
  
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
        if (p instanceof CartItem){
            html = productTemplate.replaceAll("{{id_produit}}", p.getProduct()._id );
            html = html.replaceAll("{{nom}}",  p.getProduct()._name );

            html = html.replaceAll("{{url-image}}", p.getProduct()._image);
            html = html.replaceAll("{{prix}}", p.getProduct()._price + " €");

            /*
            if(p.getIdCategory() == 1){
                let options1 = renderOption(p.getSize());
        
                html = html.replace("{{liste-option-1}}", options1);

                let options2 = renderOption(p.getSauce());
                html = html.replace("{{liste-option-2}}", options2);

            }

            if(p.getIdCategory() == 2){
                let options1 = renderOption(p.getSize());
        
                html = html.replace("{{liste-option-1}}", options1);

                let options2 = renderOption(p.getIce());
                html = html.replace("{{liste-option-2}}", options2);
            }

            if(p.getIdCategory() == 3){
                let options1 = renderOption(p.getSize());
        
                html = html.replace("{{liste-option-1}}", options1);

                let options2 = renderOption(p.getCream());
                html = html.replace("{{liste-option-2}}", options2);
            }
            
            if(p.getStock() == 0){
                html = html.replaceAll("{{indispo}}", 'flex');
                
            }
            else{
                html = html.replaceAll("{{indispo}}", 'hidden');

            }
            */

            html = html.replaceAll("{{quantity}}", p.getQuantity() );

            all += html;


        }
    }

    return all;
 }

 export {render as orderRenderer};