window.addEventListener("load", sidenVises);

let lastScrollPosition = 0;
var winWidth = window.innerWidth;
var endPos = Math.round(winWidth * 7);
var disappear = Math.round(endPos - 400);

window.addEventListener("scroll", scroll);

function scroll() {
  console.log(lastScrollPosition);

  lastScrollPosition = window.scrollX;

  if (lastScrollPosition < 400) {
    document.querySelector("#pil_tilbage").classList.add("hide");
  } else {
    document.querySelector("#pil_tilbage").classList.remove("hide");
  }

  if (lastScrollPosition > disappear) {
    document.querySelector("#pil_frem").classList.add("hide");
  } else {
    document.querySelector("#pil_frem").classList.remove("hide");
  }

}


function sidenVises() {
  console.log("sidenVises");

  document.querySelector("#pil_frem").addEventListener("click", frem);
  document.querySelector("#pil_tilbage").addEventListener("click", tilbage);

  document.querySelector("#menuknap").addEventListener("click", dropDown);

  document.querySelector("#mm_tekst").addEventListener("click", mmPlus);
  document.querySelector("#uni_tekst").addEventListener("click", uniPlus);
  document.querySelector("#nude_tekst").addEventListener("click", nudePlus);
  document.querySelector("#cup_tekst").addEventListener("click", cupPlus);
  document.querySelector("#mug_tekst").addEventListener("click", mugPlus);
  document.querySelector("#kea_tekst").addEventListener("click", keaPlus);
  document.querySelector("#data_tekst").addEventListener("click", dataPlus);
  document.querySelector("#res_tekst").addEventListener("click", resPlus);
}

function frem() {
  console.log("frem");

  window.scrollBy(window.innerWidth, 0);
}

function tilbage() {
  console.log("tilbage");

  window.scrollBy(-window.innerWidth, 0);
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

function mmPlus() {
  console.log("mmPlus");

  document.querySelector("#mm_tekst_plus").classList.remove("hide");
  document.querySelector("#mm_tekst_plus").addEventListener("click", mmMinus);
}

function mmMinus() {
  console.log("mmMinus");

  document.querySelector("#mm_tekst_plus").classList.add("hide");
}

function uniPlus() {
  console.log("uniPlus");

  document.querySelector("#uni_tekst_plus").classList.remove("hide");
  document.querySelector("#uni_tekst_plus").addEventListener("click", uniMinus);
}

function uniMinus() {
  console.log("uniMinus");

  document.querySelector("#uni_tekst_plus").classList.add("hide");
}

function nudePlus() {
  console.log("nudePlus");

  document.querySelector("#nude_tekst_plus").classList.remove("hide");
  document.querySelector("#nude_tekst_plus").addEventListener("click", nudeMinus);
}

function nudeMinus() {
  console.log("nudeMinus");

  document.querySelector("#nude_tekst_plus").classList.add("hide");
}

function cupPlus() {
  console.log("cupPlus");

  document.querySelector("#cup_tekst_plus").classList.remove("hide");
  document.querySelector("#cup_tekst_plus").addEventListener("click", cupMinus);
}

function cupMinus() {
  console.log("cupMinus");

  document.querySelector("#cup_tekst_plus").classList.add("hide");
}

function mugPlus() {
  console.log("mugPlus");

  document.querySelector("#mug_tekst_plus").classList.remove("hide");
  document.querySelector("#mug_tekst_plus").addEventListener("click", mugMinus);
}

function mugMinus() {
  console.log("mugMinus");

  document.querySelector("#mug_tekst_plus").classList.add("hide");
}

function keaPlus() {
  console.log("keaPlus");

  document.querySelector("#kea_tekst_plus").classList.remove("hide");
  document.querySelector("#kea_tekst_plus").addEventListener("click", keaMinus);
}

function keaMinus() {
  console.log("keaMinus");

  document.querySelector("#kea_tekst_plus").classList.add("hide");
}

function dataPlus() {
  console.log("dataPlus");

  document.querySelector("#data_tekst_plus").classList.remove("hide");
  document.querySelector("#data_tekst_plus").addEventListener("click", dataMinus);
}

function dataMinus() {
  console.log("dataMinus");

  document.querySelector("#data_tekst_plus").classList.add("hide");
}

function resPlus() {
  console.log("resPlus");

  document.querySelector("#res_tekst_plus").classList.remove("hide");
  document.querySelector("#res_tekst_plus").addEventListener("click", resMinus);
}

function resMinus() {
  console.log("resMinus");

  document.querySelector("#res_tekst_plus").classList.add("hide");
}
