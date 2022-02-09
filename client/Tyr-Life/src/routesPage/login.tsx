import React from 'react'
import Header from '../componentes/header'
import json_pt_br from '../strings/pt-br.json'

const language = navigator.language
var [emailLabel, senhaLabel, entrarLabel, titleLabel]: string = ''

function definirStrings(){
    if(language == "pt-BR"){
        titleLabel = json_pt_br.login.titleLabel
        emailLabel = json_pt_br.login.emailLabel
        senhaLabel = json_pt_br.login.senhaLabel
        entrarLabel = json_pt_br.login.entrarLabel

    }
    else{
        console.log("nenhuma linguagem encontrada")
    }
}

definirStrings()



class LoginScreen extends React.Component{
    render(){
       return (
           <>
            <Header/>
            <main>
                <div id="formulario-titulo">
                    <h1>{titleLabel}</h1>
                </div>
                <div id="formulario-registro">
                    <div id="elementos-fomulario">
                        <label htmlFor="emailLogin">{emailLabel}</label>
                        <input className="caixaInput" id="emailLogin" type="email"/>
                        <label htmlFor="senhaLogin">{senhaLabel}</label>
                        <input className="caixaInput" id="senhaLogin" type="password"/>
                    </div>
                    <button id="entrar">{entrarLabel}</button>
                </div>
        
            </main>
        </>
        )
    }
}



export default LoginScreen