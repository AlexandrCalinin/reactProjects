import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { useState } from "react";

function App() {
  const [colors, setColor] = useState(new Values("#f15025").all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColor(newColors);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  );
}

export default App;
