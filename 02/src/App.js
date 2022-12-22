import { useState, useEffect } from "react";
import Loading from "./componets/Loading";
import Tours from './componets/Tours'
import axios from "axios";

function App() {
  const [Tour, setTour] = useState([]);
  const [loading,setLoading] = useState(true);

  const removeTour = (id) => {
    const DataFilter = Tour.filter((e) => e.id !== id)
    console.log(DataFilter)
    setTour(DataFilter)
  }
  const CallApi = async () => {
     axios.get('https://course-api.com/react-tours-project')
      .then((res) => {
        setTour(res.data)
        setLoading(false)
        console.log(res.data)
      })
  }

  useEffect(() => {
    CallApi();
  }, []);
  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  if(Tour.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => CallApi()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={Tour} removeTour={removeTour} />
    </main>
  );
}

export default App;
