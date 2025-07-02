const inputElement = document.querySelector("input[type='text']");
const addTaskButton = document.querySelector("button.btn");

function validateInput() {
  return inputElement.value.trim() !== ""; // Vazio = false / Contéudo = true
}

// Adicionar borda vermelha caso input esteja vazio.
function handleAddTask() {
  const isValid = validateInput();

  if (!isValid) {
    inputElement.classList.add("error");
  }

  const itemList = document.createElement("li");
}

// Captar alguma "entrada" no input.
function handleInputChange() {
  const isValid = validateInput();

  if (isValid) {
    inputElement.classList.remove("error");
  }
}

// Chama a função "handleAddTask" no click do botão.
addTaskButton.addEventListener("click", () => handleAddTask());

// Chama a função "handleInputChange"
inputElement.addEventListener("change", () => handleInputChange());
