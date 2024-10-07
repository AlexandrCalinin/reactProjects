import CardList from "./CardList";
import data from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h1>{people.length} Birthdays Today</h1>
        <CardList people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
