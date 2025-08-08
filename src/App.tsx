import { IoSearchOutline } from "react-icons/io5"
import { Fillters } from "./components/Fillters/Fillters"
import { Games } from "./components/Games/Games"
import { Header } from "./components/Header/Header"

function App() {
  return (

    <div className="wrapper flex flex-col gap-7"> 
      <Header/>
      <div className="h-12 w-full relative container">
          <input className="bg-[#181724] outline-none border-2 border-[#D9D9D9] rounded-lg text-[#BEBEBE] font-Vazirmatn h-full w-full px-3" type="text" placeholder="Game Name" />
          <IoSearchOutline className="absolute right-8 top-1/2 -translate-y-1/2 text-[#BEBEBE] text-3xl"/>
      </div> 
      <div className="container flex  gap-5">
        <Fillters/>
        <Games/>
      </div>
    </div>
  )
}

export default App
