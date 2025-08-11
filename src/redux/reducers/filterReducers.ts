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
    payload?: { selectedGenre?: string[] | null; games?: GamesType[] };
  }
) => {
  switch (action.type) {
    case filterActionType.GENRE_FILTER: {
      if (
        !action.payload?.selectedGenre ||
        action.payload?.selectedGenre?.length === 0
      ) {
        return { ...state, filteredGames: state.allGames };
      }
      const filteredGames = state.allGames.filter(
        (game) =>
          Array.isArray(game.genres) &&
          game.genres?.some((gameGenre) =>
            action.payload?.selectedGenre?.includes(gameGenre)
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
