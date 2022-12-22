import React, { useState } from 'react'
import List from './componets/List'
import Data from './componets/data'

function App() {
  const [person, setPerson] = useState(Data)
  return (
    <>
      <section className='container'>
        <h3>{person.length} birthdays today</h3>
        <List people={person} />
        <button onClick={()=>setPerson([])}>Clear All</button>
      </section>
    </>
  )
}

export default App