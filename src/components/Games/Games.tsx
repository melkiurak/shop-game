import { useEffect, useState } from "react"
import { GamesData } from "../../server/getData"
import type { GamesType } from "../../types";

export const Games = () => {
    const [games, setGames] = useState<GamesType[]>([]);
    useEffect(() => {
        const axiosGame = async () => {
            const result = await GamesData();
            setGames(result ?? []);
        };
        axiosGame();
    }, [])

    return <div>
        {games.map((game) => (
        <div key={game.id}>
          <p>{game.name}</p>
          <p>{game.price}</p>
        </div>
      ))}
    </div>
}