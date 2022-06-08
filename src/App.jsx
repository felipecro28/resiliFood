import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./pages/Main/Main";
import Carrinho from "./components/Carrinho/Carrinho";
import Loader from "./components/Loader/Loader";
import Cardapio from "./components/Cardapio/Cardapio";
import Pagina404 from "./Pages/Pagina404/Pagina404";
import ProdutosProvider from "../context/Cart";
import SobreNos from "./components/SobreNos/SobreNos";
import Devs from "./components/Devs/Devs";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  });

  return (
    <ProdutosProvider>
    <div className="App">
      {isLoading == true ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/carrinho' element={<Carrinho />} />
            <Route path="/cardapio" element={<Cardapio />}/>
            <Route path="/devs" element={<Devs/>}/>
            <Route path="/sobrenos" element={<SobreNos/>}/>
            <Route path='*' element={<Pagina404/>} />
          </Routes>
        </BrowserRouter>
        
      )}
    </div>
    </ProdutosProvider>
  );
}

export default App;
