import { CartItem } from "../class/cart-item.js";

const productTemplate = document.querySelector("#order-template").innerHTML;

let renderOption = function(data) {
    let tmp = document.querySelector('#option-order-template');
    let shtml = tmp.innerHTML;

    let optionsHtml = ""; // Créez une chaîne vide pour stocker les options

    for (let option of data) {
        optionsHtml += shtml.replace("{{option}}", option);
    }

    return optionsHtml; // Retournez la chaîne contenant toutes les options
}
  
// data attend un tableau de Product
let renderTotal = function(data){
    let all = "";
    let total = 0;
    // on vérifie que data est bien est tableau
    if (data instanceof Array === false) { 
        console.error( "data has to be an array of Products");
        return all;
    }
    for(let p of data){
        // on vérifie que p est bien un Product
        if (p instanceof CartItem){
            total += p.getProduct()._price * p.getQuantity()
            console.log(total)
        }
    }

    let tmpTot = document.querySelector('#total')
    tmpTot.textContent = total;

    all += total;
    
    return all;
}

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
            console.log(p.getOptions())
            html = html.replaceAll("{{liste-option}}", renderOption(p.getOptions()));
            
            
            // if(p.getStock() == 0){
            //     html = html.replaceAll("{{indispo}}", 'flex');
                
            // }
            // else{
            //     html = html.replaceAll("{{indispo}}", 'hidden');

            // }


            html = html.replaceAll("{{quantity}}", p.getQuantity() );

            all += html;

        }
    }


    return all;
 }

 export {render as orderRenderer};
 export {renderTotal as orderTotalRenderer };
