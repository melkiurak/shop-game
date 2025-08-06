import { FaShoppingCart } from "react-icons/fa";

export const Header = () => {
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
            <div>
                <button className="border-[#FF5733] border-2 text-[#FF5733] text-xl rounded-2xl px-5 py-2 flex items-center justify-center">
                    <FaShoppingCart/>
                </button>
            </div>
        </div>
    </header>
}