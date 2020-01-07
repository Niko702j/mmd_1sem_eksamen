window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  document.querySelector("#menuknap").addEventListener("click", dropDown);
}

function dropDown() {
  console.log("dropDown");
  document.querySelector("#menuknap").removeEventListener("click", dropDown);

  document.querySelector("#dropdown").classList.remove("hide_mob");
  document.querySelector("header").classList.add("menubaggrund");

  document.querySelector("#menuknap").classList.add("luk");
  document.querySelector("#menuknap").classList.remove("menu");

  document.querySelector("#menuknap").addEventListener("click", lukMenu);
  document.querySelector("#dropdown").addEventListener("click", lukMenu);
  document.querySelector("section").addEventListener("click", lukMenu);
}

function lukMenu() {
  console.log("lukMenu");
  document.querySelector("#menuknap").removeEventListener("click", lukMenu);

  document.querySelector("#dropdown").classList.add("hide_mob");
  document.querySelector("header").classList.remove("menubaggrund");

  document.querySelector("#menuknap").classList.add("menu");
  document.querySelector("#menuknap").classList.remove("luk");

  document.querySelector("#menuknap").addEventListener("click", dropDown);
}
