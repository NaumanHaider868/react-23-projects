import React from 'react'

function List({ people }) {
    return (
        <>
            {
                people.map((x, i) => {
                    return (
                        <article className='person'>
                            <img src={x.image} />
                            <div>
                                <h4>{x.name}</h4>
                                <p>{x.age} years</p>
                            </div>
                        </article>
                    )
                })
            }
        </>
    )
}

export default List