import { useState, type ChangeEvent } from "react";
import { useDispatch } from "react-redux";

export const Fillters = () => {
    const [selectedGenre, setSelectedGenre] = useState<string []>([]);    
    const dispatch = useDispatch();
    const genres = ['Action', 'Action RPG', 'RPG', 'Samurai', 'Sports', 'Shooting', 'Racing', 'Battle', 'Survival', 'Strategy'];

    const handleChangeGenre = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = e.target;

        let updateGenre;
        if(checked){
            updateGenre = [...selectedGenre, value];
            console.log(value)
        } else {
            updateGenre = (selectedGenre.filter(genre => genre !== value))
        }
        dispatch({type: 'GENRE_FILTER', payload: {selectedGenre:updateGenre}})
        setSelectedGenre(updateGenre);
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
                        <span className="font-Vazirmatn font-black  text-white text-nowrap">{genre}</span>
                    </label>
                ))}
            </div>
        </form>
    </aside>
}