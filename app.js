let amigos = [];

function adicionarAmigo(){
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

if (nome === ""){
    print('Por favor, insira um nome');
    return;
}

amigos.push(nome);

document.getElementById('amigo').value = "";

atualizarLista();

}

function atualizarLista(){
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = ''

      for(let i = 0; i < amigos.length; i++) {
         let nomeA = amigos[i];
        lista.innerHTML += "<li>" + nomeA + "</li>";
    }
}

sortearAmigo();

function sortearAmigo(){
    if(amigos.length === 0){
        alert('Não há amigos disponíveis para sortear');
        return;     
    }


let sorteio = Math.floor(Math.random()* amigos.length);

let amigoSorteado = amigos[sorteio];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}