import { getBottles } from "./data.js";

const bottlesContainer = document.querySelector("#liens");

/* Fonction : retourne du code html */

function createBottleCard(bottle) {
  return `
    <div class="bottle-card d-flex flex-column align-items-center my-4">
      <h2>${bottle.name}</h2>
      <a href="boissons.html?id=${bottle.id}"><img src="${bottle.image}" class="w-100" /></a>
      <button data-id="${bottle.id}" class="btn btn-primary mt-auto btn-bottle">Voir les détails</button>
    </div>
  `;
}


/* Fonction : insert dans la page le code html qui est dans la fonction "createBottleCard" (au dessus) */

async function displayBottles() {
  try {
    const bottles = await getBottles();
    bottlesContainer.innerHTML = bottles.map(createBottleCard).join("");
  } catch (error) {
    console.error("Erreur lors de l'affichage des bouteilles :", error);
  }
}

displayBottles();


/* Commande qui va parcourir les listes et insérer un lien au bouteilles lorsque qu'elle "entend" une action (ici, un click) */

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-bottle")) {
    const bottleId = event.target.getAttribute("data-id");
    window.location.href = `boissons.html?id=${bottleId}`;
  }
});
