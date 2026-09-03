import React,{ useState } from "react";

const App = () => {
 const [name, setName] =useState("KIET");
  function changeName(newName){ 
   setName(newName);
    console.log(name);
  }
  return (
    <div>
      <h1>Name : {name}</h1>
      <button onClick={() => changeName("KIET MCA")}>Change Name</button>
    </div>
  );
}


export default App
