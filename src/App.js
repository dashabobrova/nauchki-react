import axios from "axios";
import React, { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Router } from "./Router";

function App() {
 /*  useEffect(()=>{
    axios.post('https://nauchki.herokuapp.com/login?username=dasha&password=dasha')
    .then(data=>console.log(data))
  }, []); */

  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
