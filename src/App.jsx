import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet.jsx"


const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>

      <Pet name="Lulu" animal="Dog" breed="Papillon" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

export default App;



const containerElement = document.getElementById("root");
const root = createRoot(containerElement);

root.render(React.createElement(App));
