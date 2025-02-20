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
