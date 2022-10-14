import "./App.css";
import { BrowserRouter } from "react-router-dom";
import HomeView from "./Views/HomeView/HomeView.js";
import MyRoutes from "./myRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
