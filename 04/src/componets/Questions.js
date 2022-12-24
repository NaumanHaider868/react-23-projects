import React,{useState} from 'react'

function Questions({info,title}) {
    const [show,setShow] = useState(false)
  return (
    <article className='question'>
        <header>
            <h4>{title}</h4>
            <button className='btn' onClick={()=>setShow(!show)}>
                {show ? 'show less' : 'show'}
            </button>
        </header>
        {show ? <p>{info}</p> : ''}
    </article>
  )
}

export default Questions