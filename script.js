function verificarSenha() {
  var senha = document.getElementById("senha").value;
  var senhaCorreta = "namorada"; // Defina aqui a senha que você quer usar

  if (senha === senhaCorreta) {
    document.getElementById("login").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
  } else {
    alert("Senha incorreta! Tente novamente.");
  }
}
