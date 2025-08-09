import { IoCloseSharp } from "react-icons/io5";

interface CartProps {
    setCartMenu: React.Dispatch<React.SetStateAction<boolean>>
} 

export const Cart = ({setCartMenu}:CartProps) => {

    return <div  className="fixed top-0 left-0 bg-black/40 w-full h-full z-10 flex items-center justify-center">
        <div className="rounded-xl bg-[#1C1B29] p-4 max-w-[500px] w-full" >
            <div className="flex justify-between items-center text-white font-Vazirmatn">
                <h2 className="font-medium">Cart</h2>
                <button className="text-2xl" onClick={() => setCartMenu(false)}>
                    <IoCloseSharp/>
                </button>
            </div>
        </div>
    </div>
}