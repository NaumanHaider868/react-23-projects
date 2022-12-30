import { useEffect,useState } from "react";
import data from './data'
import moment from "moment/moment";

function App() {
  const getTheme = () => {
    let theme = 'light-theme';
    if(localStorage.getItem('theme')){
      theme = localStorage.getItem('theme');
    }
    return theme
  }
  const [theme,setTheme] = useState(getTheme());
  const toggleTheme = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme')
    }
    else{
      setTheme('light-theme')
    }
  }

  useEffect(()=>{
    document.documentElement.className = theme;
    localStorage.setItem('theme',theme)
  },[theme])
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((x)=>{
          return (
            <article className="post">
              <h2>{x.title}</h2>
              <div className="post-info">
                <span>{moment(x.date).format('dddd Do,YYYY')}</span>
                <span>{x.length} min read</span>
              </div>
              <p>{x.snippet}</p>
            </article>
          )
        })}
      </section>
    </main>
  );
}

export default App;
