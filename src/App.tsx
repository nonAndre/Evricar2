import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <div>
      <BrowserRouter basename="/Evricar2">
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
