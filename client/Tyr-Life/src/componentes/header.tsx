import React from 'react'
import './css/header.css'
import json_pt_br from '../strings/pt-br.json'

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
                        <div id='icon-app'></div>
                        <h1 id='logomarca'>Tyr Life</h1>
                    </div>
                    <ul id = 'list-links-nav'>
                        <li id='link1'>{link1}</li>
                        <li id='link2'>{link2}</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header