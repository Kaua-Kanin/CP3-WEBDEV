// ARRAY DE STRINGS
let filmesSeries = [
  "Breaking Bad",
  "The Last of Us",
  "Interestelar"
];

// LOGIN
function fazerLogin() {

  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  let erroLogin = document.getElementById("erro-login");

  erroLogin.textContent = "";

  // validação vazio
  if (usuario === "" || senha === "") {
    erroLogin.textContent =
      "Preencha usuário e senha.";
    return;
  }

  // credenciais corretas
  if (
    usuario === "aluno" &&
    senha === "fiap2025"
  ) {

    document.getElementById(
      "login-container"
    ).classList.add("escondido");

    document.getElementById(
      "app-container"
    ).classList.remove("escondido");

    renderizarLista();

  } else {
    erroLogin.textContent =
      "Usuário ou senha inválidos.";
  }
}

// MOSTRAR LISTA
function renderizarLista() {

  let lista =
    document.getElementById("lista");

  lista.innerHTML = "";

  for (let i = 0; i < filmesSeries.length; i++) {

    let li =
      document.createElement("li");

    li.innerHTML = `
      <span>${filmesSeries[i]}</span>

      <div class="acoes">
        <button onclick="editarItem(${i})">
          Editar
        </button>

        <button onclick="removerItem(${i})">
          Excluir
        </button>
      </div>
    `;

    lista.appendChild(li);
  }
}

// ADICIONAR FINAL
function adicionarFinal() {

  let input =
    document.getElementById("novo-item");

  let erro =
    document.getElementById("erro-item");

  let valor = input.value.trim();

  erro.textContent = "";

  if (valor === "") {
    erro.textContent =
      "Digite um filme ou série.";
    return;
  }

  filmesSeries.push(valor);

  input.value = "";

  renderizarLista();
}

// ADICIONAR INÍCIO
function adicionarInicio() {

  let input =
    document.getElementById("novo-item");

  let erro =
    document.getElementById("erro-item");

  let valor = input.value.trim();

  erro.textContent = "";

  if (valor === "") {
    erro.textContent =
      "Digite um filme ou série.";
    return;
  }

  filmesSeries.unshift(valor);

  input.value = "";

  renderizarLista();
}

// EDITAR
function editarItem(indice) {

  let novoValor = prompt(
    "Digite o novo nome:",
    filmesSeries[indice]
  );

  // cancelar ou vazio = mantém original
  if (
    novoValor === null ||
    novoValor.trim() === ""
  ) {
    return;
  }

  filmesSeries[indice] = novoValor;

  renderizarLista();
}

// REMOVER
function removerItem(indice) {

  filmesSeries.splice(indice, 1);

  renderizarLista();
}