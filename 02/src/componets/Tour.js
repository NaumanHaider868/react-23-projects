import React,{useState} from 'react'

function Tour({name,image,price,info,removeTour,id}) {
    const [read,setRead] = useState(false)
    return (
        <article className='single-tour'>
            <img src={image} />
            <footer>
                <div className='tour-info'>
                    <h4>{name}</h4>
                    <h4 className='tour-price'>${price}</h4>
                </div>
                <p>
                    {read ? info : `${info.substring(0,200)}` }
                    <button onClick={()=>setRead(!read)}>
                        {read?"Show Less" : "Read more"}
                    </button>
                </p>

                <button className='delete-btn' onClick={()=>removeTour(id)}>not interested</button>
            </footer>
        </article>
    )
}

export default Tour