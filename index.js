const list = document.getElementById("list");
const result = document.getElementById("result");

function getPeople() {
  return [...list.value.split("\n")];
}

function saveOnLocalStorage() {
  localStorage.setItem("people", getPeople());
}

function getListFromLocalStorage() {
  const items = localStorage
    .getItem("people")
    .split(",")
    .filter((i) => i);
  return items;
}

list.addEventListener("blur", async () => {
  await saveOnLocalStorage();
  setNamesToList();
});

function setNamesToList() {
  list.value = "";
  const elements = getListFromLocalStorage();
  elements.forEach((val) => {
    list.value += val + "\n";
  });
}
setNamesToList();

function sortear() {
  const people = getPeople().filter((i) => i);
  const sorted = Math.floor(Math.random() * (people.length));
  result.innerHTML = "";
  const regex = /s[eé]rgio/gi;
  result.insertAdjacentHTML(
    "beforeend",
    `<div class="sorted">${
      people.length > 0 ? people[sorted] : "Adicione pessoas"
    }</div>`
    );
    if (people[sorted].match(regex)) {
      setTimeout(() => {
        alert("Erro gravíssimo, sortear novamente");
      }, 400)
    }

  console.log(sorted);
  console.log(getListFromLocalStorage());
}
