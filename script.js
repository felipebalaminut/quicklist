const inputElement = document.querySelector("input[type='text']");
const addItemsButton = document.querySelector("button.btn");

function validateInput() {
  return inputElement.value.trim() !== ""; // void = false / hasContent = true
}

// Adicionar borda vermelha caso input esteja vazio.
let contador = 0;

function handleAddItems() {
  const isValid = validateInput();

  if (!isValid) {
    return inputElement.classList.add("error");
  }

  const template = document.getElementById("template");
  const clone = template.content.cloneNode(true);

  const input = clone.querySelector("input");
  input.setAttribute("id", `item-${contador}`);
  const label = clone.querySelector("label");
  label.setAttribute("for", `item-${contador}`);
  contador++;

  label.innerText = inputElement.value;

  document.querySelector("ul").appendChild(clone); // Adicionando Clone na <ul>
}

// Captar alguma "entrada" no input.
function handleInputChange() {
  const isValid = validateInput();

  if (isValid) {
    inputElement.classList.remove("error");
  }
}

// Chama a função "handleAddTask" no click do botão.
addItemsButton.addEventListener("click", () => handleAddItems());

// Chama a função "handleInputChange"
inputElement.addEventListener("change", () => handleInputChange());
