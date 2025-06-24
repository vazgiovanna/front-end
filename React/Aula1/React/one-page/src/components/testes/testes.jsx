import { useState } from "react";
// import celular from "./../../assets/images/celular.jpeg"
import './testes.css'

function Teste(){

    const [nome, mudaNome] = useState()

    return (
        <div>
            <h1>Seja bem-vindo, {nome} </h1>
            <button onClick={() => {
                mudaNome("Giovanna")
            }}>Clique aqui</button>
        </div>
    );
}

export default Teste;