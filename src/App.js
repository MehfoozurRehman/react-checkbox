import CheckBox from "./lib";
import "./app.css";
import { useState } from "react";

function App() {
  const [isChecked, setIschecked] = useState(false);
  return (
    <div className="App">
      <CheckBox
        value={isChecked}
        label="label"
        labelColor="#242424"
        checkedColor="#242424"
        unCheckedColor="#7fffd4"
        iconColor="#ffffff"
        onChange={() => {
          isChecked ? setIschecked(false) : setIschecked(true);
        }}
      />
      <CheckBox
        value={isChecked}
        label="label"
        labelColor="#242424"
        checkedColor="#242424"
        unCheckedColor="#7fffd4"
        iconColor="#ffffff"
        style={{ borderRadius: 20 }}
        onChange={() => {
          isChecked ? setIschecked(false) : setIschecked(true);
        }}
      />
      <CheckBox
        value={isChecked}
        label="label"
        labelColor="#242424"
        checkedColor="linear-gradient(45deg, #797979, #242424)"
        unCheckedColor="brown"
        iconColor="#ffffff"
        style={{ borderRadius: 20 }}
        onChange={() => {
          isChecked ? setIschecked(false) : setIschecked(true);
        }}
      />
    </div>
  );
}

export default App;
