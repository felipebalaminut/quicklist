const inputElement = document.querySelector("input[type='text']");
const addTaskButton = document.querySelector("button.btn");

//  Função "validateInput" para verificar se contém conteúdo (value  !== ""). // Return true / false
function validateInput() {
  if (inputElement.value.trim() !== "") {
    return true;
  } else {
    return false;
  }
}