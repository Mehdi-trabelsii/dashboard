import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header";


function App() {
  return (
    <main>
      <Header />
      <div>
     <Outlet />
     </div>
    </main>
  );
}

export default App;
