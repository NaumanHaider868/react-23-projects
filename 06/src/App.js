import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [loading,setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
  // const [dates,company,duties,title] = data[value];
  const api = 'https://course-api.com/react-tabs-project';
  const apiResp = () => {
    axios(api).then((resp) => {
      console.log(resp.data)
      setData(resp.data)
      setLoading(false)
    })
  }
  useEffect(() => {
    apiResp()
  }, [])

  if(loading){
    return(
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  // const { company, dates, duties, title } = data[value]
  return (
    <section className="section">
      <div className="title">
        <h2>exprience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {data.map((x,i) => {
            return (
              <button className="job-btn" key={x.id} onClick={()=>setValue(i)} >{x.company}</button>
            )
          })}
        </div>
        <article className="job-info">

          {data.map((item) => {
            return (
              <>
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <p className="job-date">{item.dates}</p>

                {item.duties.map((x, i) => {
                  return (
                    <div className="job-desc">
                      <p>{x}</p>
                    </div>
                  )
                })}

              </>
            )
          })}
        </article>
      </div>
      <button className="btn">more info</button>
    </section>
  );
}

export default App;
