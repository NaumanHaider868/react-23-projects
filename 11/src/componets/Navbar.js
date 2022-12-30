import React, { useState, useRef, useEffect } from 'react'
import { links, social } from './data'
import logo from './logo.svg'

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    }
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
          linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
          linksContainerRef.current.style.height = '0px';
        }
      }, [showLinks]); 
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='logo' />
                    <button className='nav-toggle' onClick={toggleLinks}>
                        api
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        {links.map((x, i) => {
                            return (
                                <li key={x.id}>
                                    <a href={x.url}>{x.text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <ul className='social-icons'>
                    {social.map((x) => {
                        return (
                            <li key={x.id}>
                                <a href={x.url}>{x.icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar