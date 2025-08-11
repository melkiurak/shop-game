import type { GamesType } from "../../types";

export const filterActionType = {
  GENRE_FILTER: "GENRE_FILTER",
};
type FilterState = {
  allGames: GamesType[];
  filteredGames: GamesType[];
  selectedGenre: string[];
};

export const initialState: FilterState = {
  allGames: [],
  filteredGames: [],
  selectedGenre: [],
};

export const filterReducer = (
  state = initialState,
  action: {
    type: keyof typeof filterActionType;
    payload?: { selectedGenre: string };
  }
) => {
  switch (action.type) {
    case filterActionType.GENRE_FILTER: {
      const filteredGames = state.allGames.filter((game) =>
        game.genre?.some(
          (gameGenre) => gameGenre === action.payload?.selectedGenre
        )
      );
      return { ...state, filteredGames: filteredGames };
    }
    default:
      return state;
  }
};
