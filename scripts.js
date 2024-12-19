const inputTask = document.querySelector("#task-input");
const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");
let taskCount = ul.querySelectorAll("li:not(.hidden)").length;

function addTask() {
  // verifica se tem alguma entrada
  const value = inputTask.value;

  if (!value) return;

  // Clonando o primeiro <li>
  const li = ul.querySelector("li").cloneNode(true);
  li.querySelector("label").textContent = value;

  // Insere o <li> dentro da  <ul>
  ul.appendChild(li);

  taskCount = taskCount + 1;

  const input = li.querySelector("input");
  const idName = `item-${taskCount}`;

  input.id = idName;
  input.value = idName;

  li.querySelector("label").setAttribute("for", idName);

  li.classList.remove("hidden");

  inputTask.value = "";
}

btn.addEventListener("click", addTask);

inputTask.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
