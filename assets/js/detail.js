import { getBottleById } from "./data.js";

// urlSearchParams pour récupérer l'ID de la bouteille depuis l'URL

for (let p of searchParams) {
  console.log(p);
}

searchParams.getAll("topic"); // ["api"]