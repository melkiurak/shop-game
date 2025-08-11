import type { GamesType } from "../../types";

export const filterActionType = {
  GENRE_FILTER: "GENRE_FILTER",
  ALL_GAME: "ALL_GAME",
};
type FilterState = {
  allGames: GamesType[];
  filteredGames: GamesType[];
  selectedGenre: [];
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
    payload?: { selectedGenre?: string; games?: GamesType[] };
  }
) => {
  switch (action.type) {
    case filterActionType.GENRE_FILTER: {
      const filteredGames = state.allGames.filter((game) =>
        game.genres?.some(
          (gameGenre) => gameGenre === action.payload?.selectedGenre
        )
      );
      return { ...state, filteredGames: filteredGames };
    }
    case filterActionType.ALL_GAME: {
      const allGames = action.payload?.games;
      return { ...state, allGames: allGames, filteredGames: allGames };
    }
    default:
      return state;
  }
};
