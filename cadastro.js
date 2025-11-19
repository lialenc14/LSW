function cadastrarUsuario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  const usuario = { nome, email, senha };

  let lista = JSON.parse(localStorage.getItem("usuarios")) || [];

  const existe = lista.find(u => u.email === email);
  if (existe) {
    alert("E-mail já cadastrado!");
    return;
  }

  lista.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(lista));

  alert("Cadastro realizado com sucesso!");
}
