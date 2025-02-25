import React from 'react'
import { Link } from 'react-router-dom'

function SecondaryNav() {
    const navItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Blog',
            link: '#blog'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
        {
            name: 'Page',
            link: '/page'
        },
        {
            name: 'Cart',
            link: '/cart'
        },
        {
            name: 'Checkout',
            link: '/checkout'
        },

    ]
    return (
            <div className='second-nav'>
                {
                    navItems.map((item, index) => {
                        return (
                            <Link to={item.link} key={index}>{item.name}</Link>
                        )
                    })
                }
                <Link to="/" className='nav-btn'>Buy Now</Link>
            </div>
    )
}

export default SecondaryNav
