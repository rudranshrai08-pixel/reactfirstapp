<<<<<<< HEAD
import React, { useState } from "react";

const App = () => {
  let initName = {
    id: 1,
    name: "KIET",
  };
  const [nameObj, setName] = useState(initName);
  function changeName(newName) {
    console.log(nameObj);
    setName({ ...nameObj, name: newName });
    console.log(nameObj);
  }
  console.log(nameObj);
  return (
    <div>
      <h1>Name:{nameObj.name}</h1>
      <button onClick={() => changeName("KIET MCA")}>Change Name</button>
    </div>
  );
};

export default App;
=======
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
>>>>>>> 5151341eeabea143da723c4d31779e2288c38925
