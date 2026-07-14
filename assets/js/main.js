import { getBottles } from "./data.js";

const bottlesContainer = document.querySelector("#liens");

function createBottleCard(bottle) {
  return `
    <div class="bottle-card">
      <h2>${bottle.name}</h2>
      <a href="boissons.html?id=${bottle.id}"><img src="${bottle.image}" class="w-100" /></a>
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
