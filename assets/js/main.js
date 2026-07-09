import { getBottles } from "./data.js";

// Récupérer le div avec un id
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

async function displayBottles() {
  try {
    const bottles = await getBottles();

    console.log(bottles);
  } catch (error) {
    console.error("Erreur lors de l'affichage des bouteilles :", error);
  }
}

displayBottles();
