import { useState } from "react";
import data from './componets/data'

function App() {
  const [count,setCount] = useState(0);
  const [JSON,setJson] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    // let amount = count;
    if(count <= 0){
      count = 0
    }
    if(count > 8){
      count = 8
    }
    setJson(data.slice(0,count))
  }
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraph:</label>
        <input type='number' name='amount' value={count} onChange={(e)=>setCount(e.target.value)} />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {JSON.map((x,i)=>{
          return <p key={i}>{x}</p>
        })}
      </article>
    </section>
  );
}

export default App;



