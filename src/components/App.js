import React from "react";
import Home from "./home";
import Ic from "./Ic";

import Compose from "./Compose";
import "../styles.css";

import { BrowserRouter,Routes,Route,Link } from "react-router-dom";



function App()
{
  return (

      <BrowserRouter>
          <main>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/compose" element={<Compose />}/>
                <Route path="/ic" element={<Ic />} ></Route>
              </Routes>


          </main>
        </BrowserRouter>
  

  );
}

export default App;