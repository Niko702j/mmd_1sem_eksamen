window.addEventListener("load", sidenVises);

let lastScrollPosition = 0;

window.addEventListener("scroll", scroll);

function scroll() {
  console.log(lastScrollPosition);

  lastScrollPosition = window.scrollX;

  if (lastScrollPosition < 400) {
    document.querySelector("#pil_tilbage").classList.add("hide");
  } else {
    document.querySelector("#pil_tilbage").classList.remove("hide");
  }

  if (lastScrollPosition > 4710) {
    document.querySelector("#pil_frem").classList.add("hide");
  } else {
    document.querySelector("#pil_frem").classList.remove("hide");
  }

}


function sidenVises() {
  console.log("sidenVises");

  document.querySelector("#pil_frem").addEventListener("click", frem);
  document.querySelector("#pil_tilbage").addEventListener("click", tilbage);

  document.querySelector("#mm_tekst").addEventListener("click", mmPlus);
  document.querySelector("#uni_tekst").addEventListener("click", uniPlus);
}

function frem() {
  console.log("frem");

  window.scrollBy(window.innerWidth, 0);
}

function tilbage() {
  console.log("tilbage");

  window.scrollBy(-window.innerWidth, 0);
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
