import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <GlobalStyles></GlobalStyles>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/game/:id" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;


//REDUX-THUNK allows us to asynchronously fetch data. REDUX doesn't allow asynchronous fetching.