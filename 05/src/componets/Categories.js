import React from 'react'

function Categories({ category, fiterItems }) {
    return (
        <div className='btn-container'>
            {category.map((x,i) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={i}
                        onClick={() => fiterItems(x)}
                    >
                        {x}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories