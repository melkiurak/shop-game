import { useEffect, useState } from "react"
import { GamesData } from "../../server/getData"
import type { GamesType } from "../../types";
import { FaCalendarAlt,FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector  } from "react-redux";
import type { RootState } from "../../redux/store";



export const Games = () => {
    const [games, setGames] = useState<GamesType[]>([]);
    const [gameCardCliced, setGameCardCliced] = useState<number | null>(null); 
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);

    const handelAddToCard = (game: GamesType, index: number) => {
      if(gameCardCliced !== index){
        setGameCardCliced(index)
        const current = JSON.parse(localStorage.getItem('gameInCart') || "[]");
        const addCart = Array.isArray(current) ? [...current, game] : [game];
        localStorage.setItem('gameInCart', JSON.stringify(addCart));
        dispatch({ type: 'ADD_TO_CART', payload: game });
      }
    };
    console.log(cart)


    
    useEffect(() => {
        const axiosGame = async () => {
            const result = await GamesData();
            setGames(result ?? []);
        };
        axiosGame();
    }, [])

    return <div className=" grid grid-cols-4 gap-2"> 
      {games.map((game, index) => (
        <div key={game.id} className="flex flex-col border-2 border-[#7D3C98] rounded-xl p-2.5 gap-2">
          <div className="flex items-center justify-center h-[239px]">
            <div className="w-full h-full rounded-xl bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${game.poster})`}}></div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white truncate">{game.name}</h3>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-white">
                <FaCalendarAlt/>
                {game.date && (
                  <span>{new Date(game.date).toLocaleDateString("en-US", { year: 'numeric' })}</span>
                )}
              </div>
              <div className="text-white">
                <span>{game.price}$</span>
              </div>
            </div>
            <button className={`text-xl rounded-2xl px-5 py-2 flex items-center justify-center ${gameCardCliced === index ? 'bg-[#FF5733] border-none text-white' : 'border-[#FF5733] border-2 text-[#FF5733] ' }`} onClick={() => game && handelAddToCard(game, index)} disabled={gameCardCliced === index}>
              <FaShoppingCart/>
            </button>
          </div>
        </div>
      ))}
    </div>
}