import React from 'react'
import './css/header.css'

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <ul id = 'links-nav'>
                        <li>register</li>
                        <li>login</li>
                    </ul>
                </nav>
            </header>
        )
    }
}