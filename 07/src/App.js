import React, { useEffect, useState } from 'react'
import Data from './componets/data'

function App() {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const lastIndex = Data.length - 1;
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0);
    } 
  }, [index, Data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000);
    return ()=>{
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>reviews</span>
        </h2>
      </div>
      <div className='section-center'>
        {data.map((item, personIndex) => {
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (personIndex === index - 1 ||
            (index === 0 && personIndex === Data.length - 1)) {
            position = 'lastSlide';
          }
          return (
            <article className={position} key={item.id}>
              <img src={item.image} className='person-img' />
              <h4>{item.name}</h4>
              <p className='title'>{item.title}</p>
              <p className='text'>{item.quote}</p>
              <span className='icon'></span>
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          Left
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          Right
        </button>
      </div>
    </section>
  )
}

export default App