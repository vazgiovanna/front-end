// promise é uma promessa
// resolve - cumprimos a promessa
// reject - 'rejeitamos' a promessa, ou não cumpriu!

const promessa = new Promise((resolve, reject) =>{
    let nome = 'Giovanna'

    if(nome == 'Giovanna'){
        resolve({'ADM':'Giovanna'})
    }else{
        reject('Porque o usuário NÃO é Giovanna.')
    }
})


// then - espera o resolve e retorna o que o resolve tiverm caso reject acuse um erro
// "then espera que dê de certo"
promessa.then((data) =>{ // dados do resolve
    console.log(data) // retorna dados do resolve
})

// catch - espera o reject e retorna o que o reject correspondente tiver, caso resolve ele não executar
// "catch espera que dê errado"
promessa.catch((infoDoErro) =>{
    console.log(infoDoErro)
})

function sujeitoDemorado(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            console.log('Rodando...')
            resolve()
        },2000)
    })
}

async function carregandoConteudo(){
    console.log('Olá...')
    await sujeitoDemorado()
    console.log('Finalizando...')
}