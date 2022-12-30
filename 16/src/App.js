import { useState } from "react";
import reactMarkdown from "react-markdown";

function App() {
  const [writeData,setWriteData] = useState('Enter Data')
  return (
    <main>
      <section className="markdown">
        <textarea className="input" value={writeData} onChange={(e)=>setWriteData(e.target.value)}></textarea>
        <article className="result">
          <reactMarkdown>{writeData}</reactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
