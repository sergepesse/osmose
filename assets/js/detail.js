import { getBottleById } from "./data.js";

// urlSearchParams pour récupérer l'ID de la bouteille depuis l'URL

const bottleContainer = document.querySelector("#detail");

async function displayBottle() {
  try {
    var paramsString = new URLSearchParams(document.location.search);
    var bottleId = paramsString.get('id')

    const bottle = await getBottleById(bottleId)
    bottleContainer.innerHTML = createBottleDetail(bottle);
  } catch (error) {
    console.error("Erreur lors de l'affichage des bouteilles :", error);
  }
}



function createBottleDetail(bottle) {
  return `
    <div class="col-12 col-md-6">
          <h2>${bottle.name}</h2>
          <p>${bottle.description}</p>
          <p>${bottle.prix}</p>
    </div>
    <div class="col-12 col-md-6">
          <img src="${bottle.pub}" class="w-100" />
    </div>
  `;
}

displayBottle();