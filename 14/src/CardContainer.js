import React from 'react'
import CardItem from './CardItem'
function CardContainer() {
    return (
        <section className='cart'>
            {/* cart header */}
            <header>
                <h2>your bag</h2>
            </header>
            {/* cart items */}
            <div>
                <CardItem/>
            </div>
            {/* cart footer */}
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>$total</span>
                    </h4>
                </div>
                <button className='btn clear-btn'>
                    clear cart
                </button>
            </footer>
        </section>
    )
}

export default CardContainer