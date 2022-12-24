import { useState } from 'react';
import data from './componets/data'
import Menu from './componets/Menu';
import Categories from './componets/Categories'

const filterCategories = ['all', ...new Set(data.map((x) => x.category))];
function App() {
  const [Items, setItmes] = useState(data);
  const [category, setCategory] = useState(filterCategories);

  const fiterItems   = (category) => {
    if (category == 'all') {
      setItmes(data);
      return;
    }
    const fixedCategory = data.filter((x) => x.category === category);
    setItmes(fixedCategory)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories fiterItems  ={fiterItems  } category={category} />
        <Menu Items={Items} />
      </section>
    </main>
  );
}

export default App;
