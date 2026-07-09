export async function getBottles() {
  // Doc: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

  const url = "data/bottles.json";
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

