
/* Fonction : va chercher le fichier json et charge ses données */

export async function getBottles() {
  const url = "./data/bottles.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}


/* Fonction : parcours la liste des éléments dans le fichier json, et vérifie si c'est bien le même id (sinon, envoie un message d'erreur) */

export async function getBottleById(id) {
  const url = "./data/bottles.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    const bottle = result.find((item) => item.id == id)
    return bottle
  } catch (error) {
    console.error(error.message);
  }
}
