let tg = window.Telegram.WebApp;
tg.expand();

function addTodo() {
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");

  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
  }
}
