let ul = document.createElement("ul");
document.body.append(ul);
while (true) {
  let t = prompt("Ввидите текст");
  if (!t) {
    break;
  }
  let li = document.createElement("li");
  li.textContent = t;
  ul.append(li);
}
