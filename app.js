let listaAmigos=[];
let quantidade_de_amigos=0;

//funções

function adicionar_amigo() {
 let amigo_secreto=document.querySelector('input').value;
  if (amigo_secreto === ''){
    alert("Erro: Digite um nome!");
    return;
 } else {
 listaAmigos.push(amigo_secreto);
 quantidade_de_amigos ++;
 console.log(listaAmigos);
 console.log(listaAmigos.length);
 atualizar_listaHTML();
 limpar_campo();
 }
}

function sortear_amigo() {
      if(listaAmigos.length === 0) {
         alert("Erro: Adicione pelo menos um amigo primeiro!");
          return;
    } else {
         const indice_aleatorio = Math.floor(Math.random()*listaAmigos.length);
          const amigo_sorteado = listaAmigos[indice_aleatorio];
            if (amigo_sorteado) {
                document.getElementById("resultado").innerText = "O amigo secreto é:" + amigo_sorteado + "!";
            }
    }
}

function atualizar_listaHTML(){
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    for (let i=0;i<listaAmigos.length;i++){
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        ul.appendChild(li);
    }
}

function limpar_campo(){
 amigo_secreto = document.querySelector ('input');
 amigo_secreto.value='';
}
