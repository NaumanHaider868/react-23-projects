import React from 'react'

function List({items,removeItem,editItem}) {
  return (
    <div className='grocery-list'>
        {items.map((x,i)=>{
            const {id,title} = x;
            return (
                <article className='grocery-item' key={id}>
                    <p className='title'>{title}</p>
                    <div className='btn-container'>
                        <button type='submit' className='edit-btn' onClick={()=>editItem(id)}>
                            edit
                        </button>
                        <button type='button' className='delete-btn' onClick={()=>removeItem(id)}>delete</button>
                    </div>
                </article>
            )
        })}
    </div>
  )
}

export default List