import { getBottles } from "./data.js";

// Récupérer le div avec un id
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

const bottlesContainer = document.querySelector("#liens");

function createBottleCard(bottle) {
  return `
    <div class="bottle-card">
      <h2>${bottle.name}</h2>
      <img src="${bottle.image}" />
    </div>
  `;
}

async function displayBottles() {
  try {
    const bottles = await getBottles();
    console.log("Bouteilles récupérées :", bottles);
    bottlesContainer.innerHTML = bottles.map(createBottleCard).join("");
  } catch (error) {
    console.error("Erreur lors de l'affichage des bouteilles :", error);
  }
}

displayBottles();
