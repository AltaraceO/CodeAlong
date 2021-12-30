import { useState } from "react";
import "./App.css";
import Dropdown from "./componenets/Dropdown";

const options = [
  {
    lable: "The Color Red",
    value: "red",
  },
  {
    lable: "The Color Green",
    value: "green",
  },
  {
    lable: "A Shade of Blue",
    value: "blue",
  },
];
function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        option={options}
      />
    </div>
  );
}

export default App;
