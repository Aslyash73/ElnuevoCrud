import React from "react";
import CrudApp from "./components/CrudApp";
import Modals from "./components/Modals";

function App() {
  return (
    <>
      <h1 >CRUD BASICO</h1>
      <Modals/>
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
