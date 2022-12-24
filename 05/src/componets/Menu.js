import React from 'react'

function Menu({ Items }) {
    return (
        <section className='section-center'>
            {Items.map((x) => {
                return (
                    <article className='menu-item'>
                        <img src={x.img} className='photo' />
                        <div className='item-info'>
                            <header>
                                <h4>{x.title}</h4>
                                <h4 className='price'>${x.price}</h4>
                            </header>
                            <p className='item-text'>{x.desc}</p>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}

export default Menu