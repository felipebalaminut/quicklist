const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");

// Adicionando um novo item após o clique do botão.
btn.addEventListener("click", (event) => {
  event.preventDefault();

  const inputTask = document.querySelector("#task-input");
  value = inputTask.value;

  if (!value) return;

  const li = ul.querySelector("li").cloneNode(true);
  li.querySelector("label").textContent = value;
  ul.appendChild(li);

  // Definindo o número de elementos <li> dentro da <ul>
  const taskCount = ul.querySelectorAll("li").length;

  const input = li.querySelector("input");
  input.id = `item-${taskCount}`;

  li.querySelector("label").setAttribute("for", `item-${taskCount}`);

  li.classList.remove("hidden")

  inputTask.value = "";
});
