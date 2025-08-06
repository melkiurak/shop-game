import { IoSearchOutline } from "react-icons/io5";

export const Fillters = () => {
    const genres = ['Action', 'RPG', 'Samurai', 'Sports', 'Shooting', 'Racing', 'Battle', 'Survival', 'Strategy'];
    return <aside>
        <form action="">
            <div className="h-12 w-full relative">
                <input className="bg-[#181724] outline-none border-2 border-[#D9D9D9] rounded-lg text-[#BEBEBE] font-Vazirmatn h-full w-full px-3" type="text" placeholder="Game Name" />
                <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-[#BEBEBE] text-3xl"/>
            </div>  
            <nav>
                <ul>
                    {genres.map((genre) => (
                        <li className="text-[#BEBEBE] font-Vazirmatn" key={genre}>{genre}</li>
                    ))}
                </ul>
            </nav>
        </form>
    </aside>
}