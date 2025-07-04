const inputElement = document.querySelector("input[type='text']");
const addItemsButton = document.querySelector("button.btn");
const inputCheckbox = document.querySelector("input[type='checkbox']");
const deleteAlert = document.querySelector("button.delete-alert");

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
  const deleteButton = clone.querySelector("button.delete");

  const input = clone.querySelector("input");
  input.setAttribute("id", `item-${contador}`);
  const label = clone.querySelector("label");
  label.setAttribute("for", `item-${contador}`);
  contador++;

  label.innerText = inputElement.value;
  inputElement.value = "";

  document.querySelector("ul").prepend(clone); // Adicionando Clone na <ul>
}

// Captar alguma "entrada" no input.
function handleInputChange() {
  const isValid = validateInput();

  if (isValid) {
    inputElement.classList.remove("error");
  }
}

function deleteItemsButton(event) {
  const item = event.target.closest("button");
  if (item) {
    item.closest("li").remove();

    const footer = document.querySelector("footer");
    footer.classList.add("show-alert");

    setTimeout(() => {
      footer.classList.remove("show-alert");
    }, 2000);

    deleteAlert.addEventListener("click", () => {
      footer.classList.remove("show-alert");
    });
  }
}

// CHama a função "handleAddTask" ao apertar "Enter"
window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleAddItems();
  }
});

// Chama a função "handleAddTask" no click do botão.
addItemsButton.addEventListener("click", handleAddItems);

// Chama a função "handleInputChange" após um evento no inputElement
inputElement.addEventListener("change", handleInputChange);

// Chama a função "deleteItemsButton" após um clique no botão de lixeira.
document.querySelector("ul").addEventListener("click", deleteItemsButton);
