import { getRequest } from "./api-queries.js";
import { renderMenu } from "./renderer/product-render.js";

let M = {};

M.data = await getRequest("https://mmi.unilim.fr/~toutain4/api/products");

let V = {};

// Récupérez le bouton du menu et le menu mobile 
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Écoutez l'événement de clic sur le bouton du menu
menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Cachez le menu mobile au chargement de la page
mobileMenu.classList.add("hidden");

V.render = async function (data){
    renderMenu(data);
} 


let C = {};

C.init = async function() {
    V.render(M.data);
    
}

C.init();


