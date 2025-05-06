import { useState } from "react";

interface datetime {
  hour: string;
  date: string;
}

function App() {
  const [date, setDate] = useState<datetime>();

  async function getDate() {
    const res = await fetch("https://atividade8-back-end.onrender", {
      method: "GET",
    });
    setDate(await res.json());
  }

  return (
    <main>
      <h1>Request Response</h1>
      <button onClick={() => getDate()}>Get Date and Hours</button>
      {date && (
        <>
          <div>
            <p>Hour: {date.hour}</p>
          </div>
          <div>
            <p>Date: {date.date}</p>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
