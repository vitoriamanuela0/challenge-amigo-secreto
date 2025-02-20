let amigos = [];

function adicionarAmigo() {
    const nome = document.getElementById('amigo').value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nome);
    document.getElementById('amigo').value = "";
    atualizarLista();
}
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById('resultado').innerHTML = "Não há amigos na lista para sortear.";
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}