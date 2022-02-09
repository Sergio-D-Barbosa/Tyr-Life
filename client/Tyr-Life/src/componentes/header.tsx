import React from 'react'
import './css/header.css'
import json_pt_br from '../strings/pt-br.json'
import {Link} from 'react-router-dom'

const language: string = navigator.language
var link1: string = ''
var link2: string = ''

definirStrings()

function definirStrings(){
    if (language == 'pt-BR'){
        link1 = json_pt_br.header.link1
        link2 = json_pt_br.header.link2
    }
    else{
        console.log("nenhuma linguagem encontrada")
    }
}

class Header extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <div id='box-logo'>
                        <Link to="/"><div id='icon-app'></div></Link>
                        <h1 id='logomarca'>Tyr Life</h1>
                    </div>
                    <ul id = 'list-links-nav'>
                        <li><Link to="/register" id='link1'>{link1}</Link></li>
                        <li><Link to="/login" id='link2'>{link2}</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header