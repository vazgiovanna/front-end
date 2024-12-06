document.querySelector('#cep').addEventListener('focusout', pegarCep)

function pegarCep(){
    cep = document.querySelector('#cep').value

    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((info) => {
        return info.json()
    }).then((dados) => {
        console.log(dados)
        document.getElementById('estado').value = dados.estado
        document.getElementById('endereco').value = dados.logradouro
        document.getElementById('regiao').value = dados.regiao
        
    })
}