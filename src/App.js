import axios from "axios";
import React, { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Router } from "./Router";

function App() {
 /*  useEffect(()=>{
    axios.get('https://nauchki.herokuapp.com/user/2')
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
