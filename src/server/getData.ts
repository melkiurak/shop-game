import Parse from "../lib/parse";

export const GamesData = async () => {
  try {
    const gameObject = Parse.Object.extend("Games");
    const gameQuery = new Parse.Query(gameObject);
    const result = await gameQuery.find();
    return result.map((game) => ({
      name: game.get("name") || "",
      price: game.get("price") || "",
      date: game.get("date") || "",
      poster: game.get("poster") || "",
      id: game.get("objectId") || "",
    }));
  } catch (error) {
    console.log("Error about get data", error);
  }
};
