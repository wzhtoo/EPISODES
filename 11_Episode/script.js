const createMenuBtn = document.getElementById("create-menu");
const menuContainer = document.querySelector(".menu-container");

async function deleteMenu(id) {
  return console.log("id: ", id);
  const url = `http://localhost:3000/menu?id=${id}`;
  const response = await fetch(url, { method: "DELETE" });
}

async function createMenu() {
  const menuName = document.getElementById("nameInput").value;
  const menuPrice = document.getElementById("priceInput").value;
  const menu = {
    name: menuName,
    price: menuPrice,
  };

  const response = await fetch("http://localhost:3000/menu", {
    method: "POST",
    body: JSON.stringify(menu),
    headers: {
      "content-Type": "application/json",
    },
  });
  const menus = await response.json();
  console.log(menus);
  const menusDiv = document.createElement("div");
  const ul = document.createElement("ul");
  menus.forEach((menu) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.id = menu.id;
    deleteBtn.addEventListener("click", () => deleteMenu(menu.id));
    li.textContent = menu.name;

    ul.append(li);
    ul.append(deleteBtn);
  });
  menusDiv.append(ul);
  menuContainer.innerHTML = "";
  menuContainer.append(menusDiv);
}
createMenuBtn.addEventListener("click", createMenu);
