import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
function App() {

  const { loading, data } = useFetch()
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  const handlePage = (index) => {
    setPage(index)
  }

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((x) => {
            return (
              <article className='card' key={x.id}>
                <img src={x.avatar_url} alt={x.login} />
                <h4>${x.login}</h4>
                <a href={x.html_url} className='btn'>
                  view profile
                </a>
              </article>
            )
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              Prev
            </button>
            {data.map((x, i) => {
              return (
                <button key={i} className={`page-btn ${i === page ? 'active-btn' : null}`} onClick={() => handlePage(i)}>
                  {i + 1}
                </button>
              )
            })}
            <button className="next-btn" onClick={nextPage}>next</button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
