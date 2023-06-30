/*Criar a função que esta sendo chamada no forum para
validação:
1) Palavra function + nome da função sem parâmetros
2 abra a função -> {}
3 Obtenção dos valores (criar var) dos campos que serão inseridos nos campos pelo usuários: 
4 impedir o envio do form, caso o usuário deixe algum campo vazio...(if)
5 var nome=document.getelementbyid(nome).value */

function portifi() {
    var nome = document.getElementById("fname").value
    var email = document.getElementById("lname").value
    var area = document.getElementById("coment").value
    if (nome == "") {
        alert("Verifique os dados digitados em: --Seu nome-- e tente novamente.");
        return false;
    }
    if (email == "") {
        alert("Verifique os dados digitados em: --E-mail-- e tente novamente.");
        return false;
    }
    if (area == "") {
        alert("Verifique os dados digitados em: --Comentário-- e tente novamente.");
        return false;
    }
    document.cookie = `nome=${encodeURIComponent(nome)}`;
    document.cookie = `email=${encodeURIComponent(email)}`;
    document.cookie = `area=${encodeURIComponent(area)}`;

    return true;
}