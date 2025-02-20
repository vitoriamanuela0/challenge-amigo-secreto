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