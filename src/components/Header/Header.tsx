import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useState } from "react";
import { Cart } from "../Cart/Cart";

export const Header = () => {
    const [cartMenu, setCartMenu] = useState(false);


    const cart = useSelector((state: RootState) => state.cart);
    return <header className="pt-5">
        <div className="container flex items-center justify-between">
            <div>
                <h2 className="text-white">Logo</h2>
            </div>
            <nav>
                <ul className="flex items-center gap-5 text-white ">
                    <li className="font-Vazirmatn font-medium text-[15px]"><a href="">lorem</a></li>
                    <li className="font-Vazirmatn font-medium text-[15px]"><a href="">lorem</a></li>
                    <li className="font-Vazirmatn font-medium text-[15px]"><a href="">lorem</a></li>
                    <li className="font-Vazirmatn font-medium text-[15px]"><a href="">lorem</a></li>
                </ul>
            </nav>
            <div className="relative">
                <button className="border-[#FF5733] border-2 text-[#FF5733] text-xl rounded-2xl px-5 py-2 flex items-center justify-center" onClick={() => setCartMenu(true)}>
                    <FaShoppingCart/>
                </button>
                <div className="absolute bg-[#FF5733] text-white rounded-2xl px-2 -bottom-2 -right-1">{cart.games.length}</div>
            </div>
        </div>
        {cartMenu && (
            <Cart setCartMenu={setCartMenu}/>
        )}
    </header>
}