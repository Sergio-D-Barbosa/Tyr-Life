import React from "react"
import Header from '../componentes/header'
import './css/register.css'

class RegisterScreen extends React.Component{
    render(){
       return (
           <>
                <Header/>
                <div id="main-content">
                    <div id="formulario-titulo">
                        <h1>Faça seu registro!</h1>
                    </div>
                    <div id="formulario-registro">
                        <div id="elementos-fomulario"> 
                            <label htmlFor="email">Email:</label>
                            <input className="caixaInput" id="email" type="email"/>
                            <label htmlFor="senha">Senha:</label>
                            <input className="caixaInput" id="senha" type="password"/>
                            <label htmlFor="confirmarSenha">Confirmar senha:</label>
                            <input className="caixaInput" id="confirmarSenha" type="password"/>
                        </div>
                        <button id="registrar">Registrar</button>
                    </div>
                </div>
            </>
        )
    }
}



export default RegisterScreen