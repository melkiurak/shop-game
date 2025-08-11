export interface GamesType {
  id: string;
  name: string | null;
  genres: string[] | null;
  price: number | null;
  date: string | null;
  poster: string | null;
}
export interface CartType {
  countGame: number;
  games: GamesType[];
}
