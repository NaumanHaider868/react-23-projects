import { useState } from "react";
import data from './componets/data'
import Questions from "./componets/Questions";
function App() {
  const [question,setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {question.map((x)=>{
            return <Questions {...x} />
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
