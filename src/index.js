const form = document.getElementById("form");

const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkForm();
});

function checkInputNome() {
  const nomeValor = nome.value;

  if (nomeValor === "") {
    erroInput(nome, "O nome é obrigatório");
  } else {
    const formItem = nome.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputSobrenome() {
  const sobrenomeValor = sobrenome.value;

  if (sobrenomeValor === "") {
    erroInput(sobrenome, "O sobrenome é obrigatório");
  } else {
    const formItem = sobrenome.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputEmail() {
  const emailValor = email.value;

  if (emailValor === "") {
    erroInput(email, "O email é obrigatório");
  } else if (!checkEmail(emailValor)) {
    erroInput(email, "O email não é válido");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputSenha() {
  const senhaValor = senha.value;

  if (senhaValor === "") {
    erroInput(senha, "A senha é obrigatória");
  } else {
    const formItem = senha.parentElement;
    formItem.className = "form-content";
  }
}

function checkForm() {
  checkInputNome();
  checkInputSobrenome();
  checkInputEmail();
  checkInputSenha();

  const formItens = form.querySelectorAll(".form-content");

  const isValid = [...formItens].every((item) => {
    return item.className === "form-content";
  });

  if (isValid) {
    form.submit();
  }
}

function erroInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("p");

  textMessage.innerText = message;

  formItem.className = "form-content erro";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
