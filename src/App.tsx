import { Fillters } from "./components/Fillters/Fillters"
import { Games } from "./components/Games/Games"
import { Header } from "./components/Header/Header"

function App() {

  return (
    <div className="wrapper"> 
      <Header/>
      <div className="container">
        <Fillters/>
        <Games/>
      </div>
    </div>
  )
}

export default App
