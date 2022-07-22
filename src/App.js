import React, { useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";

function App() {

  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Home></Home>
    </div>
  );
}

export default App;


//REDUX-THUNK allows us to asynchronously fetch data. REDUX doesn't allow asynchronous fetching.