import { useState, type ChangeEvent } from "react";

export const Fillters = () => {
    const [selectedGenre, setSelectedGenre] = useState<string []>([]);    
    const genres = ['Action', 'RPG', 'Samurai', 'Sports', 'Shooting', 'Racing', 'Battle', 'Survival', 'Strategy'];

    const handleChangeGenre = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = e.target;
        if(checked){
            setSelectedGenre([...selectedGenre, value])
            console.log(value)
        } else {
            setSelectedGenre(selectedGenre.filter(genre => genre !== value))
        }
    }

    return <aside className="flex-1">
        <form action="">
            <div className="flex flex-col gap-3">
                {genres.map((genre) => (
                    <label htmlFor="" key={genre} className="flex items-center gap-2">
                        <input 
                            id={genre} 
                            type="checkbox" 
                            checked={selectedGenre.includes(genre)} 
                            value={genre} 
                            onChange={handleChangeGenre}/>
                        <span className="font-Vazirmatn font-black  text-white">{genre}</span>
                    </label>
                ))}
            </div>
        </form>
    </aside>
}