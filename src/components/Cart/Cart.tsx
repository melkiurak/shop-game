import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
interface CartProps {
    setCartMenu: React.Dispatch<React.SetStateAction<boolean>>
} 

export const Cart = ({setCartMenu}:CartProps) => {
    const cartGames = useSelector((state: RootState) => state.cart.games);
    console.log(cartGames)
    return <div  className="fixed top-0 left-0 bg-black/40 w-full h-full z-10 flex items-center justify-center">
        <div className="rounded-xl bg-[#1C1B29] p-4 max-w-[900px] w-full" >
            <div className="flex justify-between items-center text-white font-Vazirmatn">
                <h2 className="font-medium">Cart</h2>
                <button className="text-2xl" onClick={() => setCartMenu(false)}>
                    <IoCloseSharp/>
                </button>
            </div>
            <div className="flex flex-col gap-5">
               {cartGames.map(game => (
                    <div key={game?.id} className="flex items-center justify-between gap-3 border-2 border-[#FF5733]/70 rounded-xl px-2">
                        <div className="flex items-center gap-2 flex-1/2">
                            <div style={{backgroundImage:`url(${game?.poster})`}} className="h-[100px]  w-[100px] bg-no-repeat bg-center bg-cover"></div>
                            <h3 className="text-white font-Vazirmatn">{game?.name}</h3>
                        </div>
                        <div className="flex items-center justify-between flex-1/2">
                            <div className="flex items-center gap-2">
                                <button className="text-white"><FaPlus/></button>
                                <input type="number" className=" border-2 border-white rounded-lg text-white font-Vazirmatn font-extrabold p-2 max-w-[44px] w-full" min={1} max={99} />
                                <button className="text-white"><FaMinus/></button>
                            </div>
                            <p className="text-gray-400">${game?.price}</p>
                            <button className="text-white text-xl">
                                <FaRegTrashAlt/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
}