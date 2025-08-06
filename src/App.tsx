import { Fillters } from "./components/Fillters/Fillters"
import { Header } from "./components/Header/Header"

function App() {

  return (
    <div className="wrapper"> 
      <Header/>
      <div className="container">
        <Fillters/>
      </div>
    </div>
  )
}

export default App
