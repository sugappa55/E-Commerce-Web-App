import {Route,Routes} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";
import { NotFound } from "./Components/NotFound";
import AllEntities from "./Pages/AllEntities";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import Cart from "./Pages/Cart";
import HomePage from "./Pages/HomePage";
import SingleEntity from "./Pages/SingleEntity";

function App() {
  
  
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/collections/all" element={<AllEntities/>}/>
    <Route path="/usercart" element={<Cart/>}/>
    <Route path="/single/:id" element={<SingleEntity/>}/>
    <Route path="/single/:id" element={<SingleEntity/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path='*' exact={true} element={<NotFound/>} />

    
    </Routes>
    </div>
  );
}

export default App;
