import { getBottles } from "./data.js";

const bottlesContainer = document.querySelector("#liens");

function createBottleCard(bottle) {
  return `
    <div class="bottle-card d-flex flex-column align-items-center my-4">
      <h2>${bottle.name}</h2>
      <a href="boissons.html?id=${bottle.id}"><img src="${bottle.image}" class="w-100" /></a>
      <button data-id="${bottle.id}" class="btn btn-primary mt-auto btn-bottle">Voir les détails</button>
    </div>
  `;
}

async function displayBottles() {
  try {
    const bottles = await getBottles();
    bottlesContainer.innerHTML = bottles.map(createBottleCard).join("");
  } catch (error) {
    console.error("Erreur lors de l'affichage des bouteilles :", error);
  }
}

displayBottles();

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-bottle")) {
    const bottleId = event.target.getAttribute("data-id");
    window.location.href = `boissons.html?id=${bottleId}`;
  }
});
