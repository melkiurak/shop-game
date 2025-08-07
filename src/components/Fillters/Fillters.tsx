
export const Fillters = () => {
    const genres = ['Action', 'RPG', 'Samurai', 'Sports', 'Shooting', 'Racing', 'Battle', 'Survival', 'Strategy'];
    return <aside className="flex-1">
        <form action="">
            <div className="flex flex-col gap-3">
                {genres.map((genre) => (
                    <button className=" text-[#BEBEBE] font-Vazirmatn bg-[#181724] rounded-4xl py-1.5"  key={genre}>{genre}</button>
                ))}
            </div>
        </form>
    </aside>
}