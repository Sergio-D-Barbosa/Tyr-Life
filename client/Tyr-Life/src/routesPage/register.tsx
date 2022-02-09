import React from "react"
import Header from '../componentes/header'
import './css/routes.css'
import json_pt_br from '../strings/pt-br.json'

const language = navigator.language
var [emailLabel, senhaLabel, confirmarSenhaLabel, registrarLabel,titleLabel]: string = ''

function definirStrings(){
    if(language == "pt-BR"){
        titleLabel = json_pt_br.register.titleLabel
        emailLabel = json_pt_br.register.emailLabel
        senhaLabel = json_pt_br.register.senhaLabel
        confirmarSenhaLabel = json_pt_br.register.confirmarSenhaLabel
        registrarLabel = json_pt_br.register.registrarLabel

    }
    else{
        console.log("nenhuma linguagem encontrada")
    }
}

definirStrings()

class RegisterScreen extends React.Component{
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
                            <label htmlFor="email">{emailLabel}:</label>
                            <input className="caixaInput" id="email" type="email"/>
                            <label htmlFor="senha">{senhaLabel}:</label>
                            <input className="caixaInput" id="senha" type="password"/>
                            <label htmlFor="confirmarSenha">{confirmarSenhaLabel}:</label>
                            <input className="caixaInput" id="confirmarSenha" type="password"/>
                        </div>
                        <button id="registrar">{registrarLabel}</button>
                    </div>
                </main>
            </>
        )
    }
}



export default RegisterScreen