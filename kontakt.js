window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  document.querySelector("#menuknap").addEventListener("click", dropDown);
  document.querySelector("#mobil").addEventListener("click", mobilInfo);
  document.querySelector("#mail").addEventListener("click", mailInfo);
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

function mobilInfo() {
  console.log("mobilInfo");

  if (document.querySelector("#info1").classList.contains("hide")) {
    document.querySelector("#info1").classList.remove("hide");
  } else {
    document.querySelector("#info1").classList.add("hide");
  }
}

function mailInfo() {
  console.log("maillInfo");

  if (document.querySelector("#info2").classList.contains("hide")) {
    document.querySelector("#info2").classList.remove("hide");
  } else {
    document.querySelector("#info2").classList.add("hide");
  }
}
