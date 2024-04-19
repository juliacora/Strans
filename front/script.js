<<<<<<< HEAD
let button = document.getElementById("botao-enviar");

button.onclick = async function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let mensagem = document.getElementById("mensagem").value;
    let data = {nome, email, telefone, mensagem}

    const response = await fetch('http://localhost:3001/api/store/task', {
=======
let button = document.getElementById("handleSubmit");

button.onclick = async function() {
    let tittle = document.getElementById("tittle").value;
    let description = document.getElementById("description").value;
    let data = {tittle,description}

    const response = await fetch ('http://localhost:3001/api/store/task', {
>>>>>>> 382b33769d78835fe1d2d1892a1d921161fccc0c
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if(content.success) {
<<<<<<< HEAD
        alert("Sucesso");

=======
        alert("Sucesso")
>>>>>>> 382b33769d78835fe1d2d1892a1d921161fccc0c
    } else{
        alert('Não');
    }
}