import { BrowserRouter } from "react-router-dom"
import Navigation from "./navigation/Navigation"

function App() { 
  return (
     <div>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
     </div>
  )
}

export default App
