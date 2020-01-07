window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  document.querySelector("#menuknap").addEventListener("click", dropDown);

  document.querySelector("#om1").addEventListener("click", omEt);
  document.querySelector("#om2").addEventListener("click", omTo);
  document.querySelector("#om3").addEventListener("click", omTre);
  document.querySelector("#om4").addEventListener("click", omFire);
  document.querySelector("#om5").addEventListener("click", omFem);
  document.querySelector("#om6").addEventListener("click", omSeks);
  document.querySelector("#om7").addEventListener("click", omSyv);
  document.querySelector("#om8").addEventListener("click", omOtte);
  document.querySelector("#om9").addEventListener("click", omNi);
  document.querySelector("#om10").addEventListener("click", omTi);
  document.querySelector("#om11").addEventListener("click", omElleve);
  document.querySelector("#om12").addEventListener("click", omTolv);
  document.querySelector("#om13").addEventListener("click", omTretten);
  document.querySelector("#om14").addEventListener("click", omFjorten);

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

function omEt() {
  console.log("omEt");

  document.querySelector("#om1").removeEventListener("click", omEt);

  document.querySelector("#omplus2").classList.add("hide");
  document.querySelector("#omplus3").classList.add("hide");
  document.querySelector("#omplus4").classList.add("hide");
  document.querySelector("#omplus5").classList.add("hide");
  document.querySelector("#omplus6").classList.add("hide");
  document.querySelector("#omplus7").classList.add("hide");
  document.querySelector("#omplus8").classList.add("hide");
  document.querySelector("#omplus9").classList.add("hide");
  document.querySelector("#omplus10").classList.add("hide");
  document.querySelector("#omplus11").classList.add("hide");
  document.querySelector("#omplus12").classList.add("hide");
  document.querySelector("#omplus13").classList.add("hide");
  document.querySelector("#omplus14").classList.add("hide");

  document.querySelector("#om2").addEventListener("click", omTo);
  document.querySelector("#om3").addEventListener("click", omTre);
  document.querySelector("#om4").addEventListener("click", omFire);
  document.querySelector("#om5").addEventListener("click", omFem);
  document.querySelector("#om6").addEventListener("click", omSeks);
  document.querySelector("#om7").addEventListener("click", omSyv);
  document.querySelector("#om8").addEventListener("click", omOtte);
  document.querySelector("#om9").addEventListener("click", omNi);
  document.querySelector("#om10").addEventListener("click", omTi);
  document.querySelector("#om11").addEventListener("click", omElleve);
  document.querySelector("#om12").addEventListener("click", omTolv);
  document.querySelector("#om13").addEventListener("click", omTretten);
  document.querySelector("#om14").addEventListener("click", omFjorten);

  document.querySelector("#omplus1").classList.remove("hide");
  document.querySelector("#x1").addEventListener("click", lukOm);
}

function omTo() {
  console.log("omTo");

  document.querySelector("#om2").removeEventListener("click", omTo);

  document.querySelector("#omplus1").classList.add("hide");
  document.querySelector("#omplus3").classList.add("hide");
  document.querySelector("#omplus4").classList.add("hide");
  document.querySelector("#omplus5").classList.add("hide");
  document.querySelector("#omplus6").classList.add("hide");
  document.querySelector("#omplus7").classList.add("hide");
  document.querySelector("#omplus8").classList.add("hide");
  document.querySelector("#omplus9").classList.add("hide");
  document.querySelector("#omplus10").classList.add("hide");
  document.querySelector("#omplus11").classList.add("hide");
  document.querySelector("#omplus12").classList.add("hide");
  document.querySelector("#omplus13").classList.add("hide");
  document.querySelector("#omplus14").classList.add("hide");

  document.querySelector("#om1").addEventListener("click", omEt);
  document.querySelector("#om3").addEventListener("click", omTre);
  document.querySelector("#om4").addEventListener("click", omFire);
  document.querySelector("#om5").addEventListener("click", omFem);
  document.querySelector("#om6").addEventListener("click", omSeks);
  document.querySelector("#om7").addEventListener("click", omSyv);
  document.querySelector("#om8").addEventListener("click", omOtte);
  document.querySelector("#om9").addEventListener("click", omNi);
  document.querySelector("#om10").addEventListener("click", omTi);
  document.querySelector("#om11").addEventListener("click", omElleve);
  document.querySelector("#om12").addEventListener("click", omTolv);
  document.querySelector("#om13").addEventListener("click", omTretten);
  document.querySelector("#om14").addEventListener("click", omFjorten);

  document.querySelector("#omplus2").classList.remove("hide");
  document.querySelector("#x2").addEventListener("click", lukOm);
}

function omTre() {
  console.log("omTre");

  document.querySelector("#om3").removeEventListener("click", omTre);

  document.querySelector("#omplus1").classList.add("hide");
  document.querySelector("#omplus2").classList.add("hide");
  document.querySelector("#omplus4").classList.add("hide");
  document.querySelector("#omplus5").classList.add("hide");
  document.querySelector("#omplus6").classList.add("hide");
  document.querySelector("#omplus7").classList.add("hide");
  document.querySelector("#omplus8").classList.add("hide");
  document.querySelector("#omplus9").classList.add("hide");
  document.querySelector("#omplus10").classList.add("hide");
  document.querySelector("#omplus11").classList.add("hide");
  document.querySelector("#omplus12").classList.add("hide");
  document.querySelector("#omplus13").classList.add("hide");
  document.querySelector("#omplus14").classList.add("hide");

  document.querySelector("#om1").addEventListener("click", omEt);
  document.querySelector("#om2").addEventListener("click", omTo);
  document.querySelector("#om4").addEventListener("click", omFire);
  document.querySelector("#om5").addEventListener("click", omFem);
  document.querySelector("#om6").addEventListener("click", omSeks);
  document.querySelector("#om7").addEventListener("click", omSyv);
  document.querySelector("#om8").addEventListener("click", omOtte);
  document.querySelector("#om9").addEventListener("click", omNi);
  document.querySelector("#om10").addEventListener("click", omTi);
  document.querySelector("#om11").addEventListener("click", omElleve);
  document.querySelector("#om12").addEventListener("click", omTolv);
  document.querySelector("#om13").addEventListener("click", omTretten);
  document.querySelector("#om14").addEventListener("click", omFjorten);

  document.querySelector("#omplus3").classList.remove("hide");
  document.querySelector("#x3").addEventListener("click", lukOm);
}

function omFire() {
  console.log("omFire");

  document.querySelector("#om4").removeEventListener("click", omFire);

  document.querySelector("#omplus1").classList.add("hide");
  document.querySelector("#omplus2").classList.add("hide");
  document.querySelector("#omplus3").classList.add("hide");
  document.querySelector("#omplus5").classList.add("hide");
  document.querySelector("#omplus6").classList.add("hide");
  document.querySelector("#omplus7").classList.add("hide");
  document.querySelector("#omplus8").classList.add("hide");
  document.querySelector("#omplus9").classList.add("hide");
  document.querySelector("#omplus10").classList.add("hide");
  document.querySelector("#omplus11").classList.add("hide");
  document.querySelector("#omplus12").classList.add("hide");
  document.querySelector("#omplus13").classList.add("hide");
  document.querySelector("#omplus14").classList.add("hide");

  document.querySelector("#om1").addEventListener("click", omEt);
  document.querySelector("#om2").addEventListener("click", omTo);
  document.querySelector("#om3").addEventListener("click", omTre);
  document.querySelector("#om5").addEventListener("click", omFem);
  document.querySelector("#om6").addEventListener("click", omSeks);
  document.querySelector("#om7").addEventListener("click", omSyv);
  document.querySelector("#om8").addEventListener("click", omOtte);
  document.querySelector("#om9").addEventListener("click", omNi);
  document.querySelector("#om10").addEventListener("click", omTi);
  document.querySelector("#om11").addEventListener("click", omElleve);
  document.querySelector("#om12").addEventListener("click", omTolv);
  document.querySelector("#om13").addEventListener("click", omTretten);
  document.querySelector("#om14").addEventListener("click", omFjorten);

  document.querySelector("#omplus4").classList.remove("hide");
  document.querySelector("#x4").addEventListener("click", lukOm);
}

function omFem() {
  console.log("omFem");

  document.querySelector("#om5").removeEventListener("click", omFem);

  document.querySelector("#omplus1").classList.add("hide");
  document.querySelector("#omplus2").classList.add("hide");
  document.querySelector("#omplus3").classList.add("hide");
  document.querySelector("#omplus4").classList.add("hide");
  document.querySelector("#omplus6").classList.add("hide");
  document.querySelector("#omplus7").classList.add("hide");
  document.querySelector("#omplus8").classList.add("hide");
  document.querySelector("#omplus9").classList.add("hide");
  document.querySelector("#omplus10").classList.add("hide");
  document.querySelector("#omplus11").classList.add("hide");
  document.querySelector("#omplus12").classList.add("hide");
  document.querySelector("#omplus13").classList.add("hide");
  document.querySelector("#omplus14").classList.add("hide");

  document.querySelector("#om1").addEventListener("click", omEt);
  document.querySelector("#om2").addEventListener("click", omTo);
  document.querySelector("#om3").addEventListener("click", omTre);
  document.querySelector("#om4").addEventListener("click", omFire);
  document.querySelector("#om6").addEventListener("click", omSeks);
  document.querySelector("#om7").addEventListener("click", omSyv);
  document.querySelector("#om8").addEventListener("click", omOtte);
  document.querySelector("#om9").addEventListener("click", omNi);
  document.querySelector("#om10").addEventListener("click", omTi);
  document.querySelector("#om11").addEventListener("click", omElleve);
  document.querySelector("#om12").addEventListener("click", omTolv);
  document.querySelector("#om13").addEventListener("click", omTretten);
  document.querySelector("#om14").addEventListener("click", omFjorten);

  document.querySelector("#omplus5").classList.remove("hide");
  document.querySelector("#x5").addEventListener("click", lukOm);
}

function omSeks() {
  console.log("omSeks");

  document.querySelector("#om6").removeEventListener("click", omSeks);

  document.querySelector("#omplus1").classList.add("hide");
  document.querySelector("#omplus2").classList.add("hide");
  document.querySelector("#omplus3").classList.add("hide");
  document.querySelector("#omplus4").classList.add("hide");
  document.querySelector("#omplus5").classList.add("hide");
  document.querySelector("#omplus7").classList.add("hide");
  document.querySelector("#omplus8").classList.add("hide");
  document.querySelector("#omplus9").classList.add("hide");
  document.querySelector("#omplus10").classList.add("hide");
  document.querySelector("#omplus11").classList.add("hide");
  document.querySelector("#omplus12").classList.add("hide");
  document.querySelector("#omplus13").classList.add("hide");
  document.querySelector("#omplus14").classList.add("hide");

  document.querySelector("#om1").addEventListener("click", omEt);
  document.querySelector("#om2").addEventListener("click", omTo);
  document.querySelector("#om3").addEventListener("click", omTre);
  document.querySelector("#om4").addEventListener("click", omFire);
  document.querySelector("#om5").addEventListener("click", omFem);
  document.querySelector("#om7").addEventListener("click", omSyv);
  document.querySelector("#om8").addEventListener("click", omOtte);
  document.querySelector("#om9").addEventListener("click", omNi);
  document.querySelector("#om10").addEventListener("click", omTi);
  document.querySelector("#om11").addEventListener("click", omElleve);
  document.querySelector("#om12").addEventListener("click", omTolv);
  document.querySelector("#om13").addEventListener("click", omTretten);
  document.querySelector("#om14").addEventListener("click", omFjorten);

  document.querySelector("#omplus6").classList.remove("hide");
  document.querySelector("#x6").addEventListener("click", lukOm);
}

function omSyv() {
  console.log("omSyv");

  document.querySelector("#om7").removeEventListener("click", omSyv);

  document.querySelector("#omplus1").classList.add("hide");
  document.querySelector("#omplus2").classList.add("hide");
  document.querySelector("#omplus3").classList.add("hide");
  document.querySelector("#omplus4").classList.add("hide");
  document.querySelector("#omplus5").classList.add("hide");
  document.querySelector("#omplus6").classList.add("hide");
  document.querySelector("#omplus8").classList.add("hide");
  document.querySelector("#omplus9").classList.add("hide");
  document.querySelector("#omplus10").classList.add("hide");
  document.querySelector("#omplus11").classList.add("hide");
  document.querySelector("#omplus12").classList.add("hide");
  document.querySelector("#omplus13").classList.add("hide");
  document.querySelector("#omplus14").classList.add("hide");

  document.querySelector("#om1").addEventListener("click", omEt);
  document.querySelector("#om2").addEventListener("click", omTo);
  document.querySelector("#om3").addEventListener("click", omTre);
  document.querySelector("#om4").addEventListener("click", omFire);
  document.querySelector("#om5").addEventListener("click", omFem);
  document.querySelector("#om6").addEventListener("click", omSeks);
  document.querySelector("#om8").addEventListener("click", omOtte);
  document.querySelector("#om9").addEventListener("click", omNi);
  document.querySelector("#om10").addEventListener("click", omTi);
  document.querySelector("#om11").addEventListener("click", omElleve);
  document.querySelector("#om12").addEventListener("click", omTolv);
  document.querySelector("#om13").addEventListener("click", omTretten);
  document.querySelector("#om14").addEventListener("click", omFjorten);

  document.querySelector("#omplus7").classList.remove("hide");
  document.querySelector("#x7").addEventListener("click", lukOm);
}

function omOtte() {
  console.log("omOtte");

  document.querySelector("#om8").removeEventListener("click", omOtte);

  document.querySelector("#omplus1").classList.add("hide");
  document.querySelector("#omplus2").classList.add("hide");
  document.querySelector("#omplus3").classList.add("hide");
  document.querySelector("#omplus4").classList.add("hide");
  document.querySelector("#omplus5").classList.add("hide");
  document.querySelector("#omplus6").classList.add("hide");
  document.querySelector("#omplus7").classList.add("hide");
  document.querySelector("#omplus9").classList.add("hide");
  document.querySelector("#omplus10").classList.add("hide");
  document.querySelector("#omplus11").classList.add("hide");
  document.querySelector("#omplus12").classList.add("hide");
  document.querySelector("#omplus13").classList.add("hide");
  document.querySelector("#omplus14").classList.add("hide");

  document.querySelector("#om1").addEventListener("click", omEt);
  document.querySelector("#om2").addEventListener("click", omTo);
  document.querySelector("#om3").addEventListener("click", omTre);
  document.querySelector("#om4").addEventListener("click", omFire);
  document.querySelector("#om5").addEventListener("click", omFem);
  document.querySelector("#om6").addEventListener("click", omSeks);
  document.querySelector("#om7").addEventListener("click", omSyv);
  document.querySelector("#om9").addEventListener("click", omNi);
  document.querySelector("#om10").addEventListener("click", omTi);
  document.querySelector("#om11").addEventListener("click", omElleve);
  document.querySelector("#om12").addEventListener("click", omTolv);
  document.querySelector("#om13").addEventListener("click", omTretten);
  document.querySelector("#om14").addEventListener("click", omFjorten);

  document.querySelector("#omplus8").classList.remove("hide");
  document.querySelector("#x8").addEventListener("click", lukOm);
}

function omNi() {
  console.log("omNi");

  document.querySelector("#om9").removeEventListener("click", omNi);

  document.querySelector("#omplus1").classList.add("hide");
  document.querySelector("#omplus2").classList.add("hide");
  document.querySelector("#omplus3").classList.add("hide");
  document.querySelector("#omplus4").classList.add("hide");
  document.querySelector("#omplus5").classList.add("hide");
  document.querySelector("#omplus6").classList.add("hide");
  document.querySelector("#omplus7").classList.add("hide");
  document.querySelector("#omplus8").classList.add("hide");
  document.querySelector("#omplus10").classList.add("hide");
  document.querySelector("#omplus11").classList.add("hide");
  document.querySelector("#omplus12").classList.add("hide");
  document.querySelector("#omplus13").classList.add("hide");
  document.querySelector("#omplus14").classList.add("hide");

  document.querySelector("#om1").addEventListener("click", omEt);
  document.querySelector("#om2").addEventListener("click", omTo);
  document.querySelector("#om3").addEventListener("click", omTre);
  document.querySelector("#om4").addEventListener("click", omFire);
  document.querySelector("#om5").addEventListener("click", omFem);
  document.querySelector("#om6").addEventListener("click", omSeks);
  document.querySelector("#om7").addEventListener("click", omSyv);
  document.querySelector("#om8").addEventListener("click", omOtte);
  document.querySelector("#om10").addEventListener("click", omTi);
  document.querySelector("#om11").addEventListener("click", omElleve);
  document.querySelector("#om12").addEventListener("click", omTolv);
  document.querySelector("#om13").addEventListener("click", omTretten);
  document.querySelector("#om14").addEventListener("click", omFjorten);

  document.querySelector("#omplus9").classList.remove("hide");
  document.querySelector("#x9").addEventListener("click", lukOm);
}

function omTi() {
  console.log("omTi");

  document.querySelector("#om10").removeEventListener("click", omTi);

  document.querySelector("#omplus1").classList.add("hide");
  document.querySelector("#omplus2").classList.add("hide");
  document.querySelector("#omplus3").classList.add("hide");
  document.querySelector("#omplus4").classList.add("hide");
  document.querySelector("#omplus5").classList.add("hide");
  document.querySelector("#omplus6").classList.add("hide");
  document.querySelector("#omplus7").classList.add("hide");
  document.querySelector("#omplus8").classList.add("hide");
  document.querySelector("#omplus9").classList.add("hide");
  document.querySelector("#omplus11").classList.add("hide");
  document.querySelector("#omplus12").classList.add("hide");
  document.querySelector("#omplus13").classList.add("hide");
  document.querySelector("#omplus14").classList.add("hide");

  document.querySelector("#om1").addEventListener("click", omEt);
  document.querySelector("#om2").addEventListener("click", omTo);
  document.querySelector("#om3").addEventListener("click", omTre);
  document.querySelector("#om4").addEventListener("click", omFire);
  document.querySelector("#om5").addEventListener("click", omFem);
  document.querySelector("#om6").addEventListener("click", omSeks);
  document.querySelector("#om7").addEventListener("click", omSyv);
  document.querySelector("#om8").addEventListener("click", omOtte);
  document.querySelector("#om9").addEventListener("click", omNi);
  document.querySelector("#om11").addEventListener("click", omElleve);
  document.querySelector("#om12").addEventListener("click", omTolv);
  document.querySelector("#om13").addEventListener("click", omTretten);
  document.querySelector("#om14").addEventListener("click", omFjorten);

  document.querySelector("#omplus10").classList.remove("hide");
  document.querySelector("#x10").addEventListener("click", lukOm);
}

function omElleve() {
  console.log("omElleve");

  document.querySelector("#om11").removeEventListener("click", omElleve);

  document.querySelector("#omplus1").classList.add("hide");
  document.querySelector("#omplus2").classList.add("hide");
  document.querySelector("#omplus3").classList.add("hide");
  document.querySelector("#omplus4").classList.add("hide");
  document.querySelector("#omplus5").classList.add("hide");
  document.querySelector("#omplus6").classList.add("hide");
  document.querySelector("#omplus7").classList.add("hide");
  document.querySelector("#omplus8").classList.add("hide");
  document.querySelector("#omplus9").classList.add("hide");
  document.querySelector("#omplus10").classList.add("hide");
  document.querySelector("#omplus12").classList.add("hide");
  document.querySelector("#omplus13").classList.add("hide");
  document.querySelector("#omplus14").classList.add("hide");

  document.querySelector("#om1").addEventListener("click", omEt);
  document.querySelector("#om2").addEventListener("click", omTo);
  document.querySelector("#om3").addEventListener("click", omTre);
  document.querySelector("#om4").addEventListener("click", omFire);
  document.querySelector("#om5").addEventListener("click", omFem);
  document.querySelector("#om6").addEventListener("click", omSeks);
  document.querySelector("#om7").addEventListener("click", omSyv);
  document.querySelector("#om8").addEventListener("click", omOtte);
  document.querySelector("#om9").addEventListener("click", omNi);
  document.querySelector("#om10").addEventListener("click", omTi);
  document.querySelector("#om12").addEventListener("click", omTolv);
  document.querySelector("#om13").addEventListener("click", omTretten);
  document.querySelector("#om14").addEventListener("click", omFjorten);

  document.querySelector("#omplus11").classList.remove("hide");
  document.querySelector("#x11").addEventListener("click", lukOm);
}

function omTolv() {
  console.log("omTolv");

  document.querySelector("#om12").removeEventListener("click", omTolv);

  document.querySelector("#omplus1").classList.add("hide");
  document.querySelector("#omplus2").classList.add("hide");
  document.querySelector("#omplus3").classList.add("hide");
  document.querySelector("#omplus4").classList.add("hide");
  document.querySelector("#omplus5").classList.add("hide");
  document.querySelector("#omplus6").classList.add("hide");
  document.querySelector("#omplus7").classList.add("hide");
  document.querySelector("#omplus8").classList.add("hide");
  document.querySelector("#omplus9").classList.add("hide");
  document.querySelector("#omplus10").classList.add("hide");
  document.querySelector("#omplus11").classList.add("hide");
  document.querySelector("#omplus13").classList.add("hide");
  document.querySelector("#omplus14").classList.add("hide");

  document.querySelector("#om1").addEventListener("click", omEt);
  document.querySelector("#om2").addEventListener("click", omTo);
  document.querySelector("#om3").addEventListener("click", omTre);
  document.querySelector("#om4").addEventListener("click", omFire);
  document.querySelector("#om5").addEventListener("click", omFem);
  document.querySelector("#om6").addEventListener("click", omSeks);
  document.querySelector("#om7").addEventListener("click", omSyv);
  document.querySelector("#om8").addEventListener("click", omOtte);
  document.querySelector("#om9").addEventListener("click", omNi);
  document.querySelector("#om10").addEventListener("click", omTi);
  document.querySelector("#om11").addEventListener("click", omElleve);
  document.querySelector("#om13").addEventListener("click", omTretten);
  document.querySelector("#om14").addEventListener("click", omFjorten);

  document.querySelector("#omplus12").classList.remove("hide");
  document.querySelector("#x12").addEventListener("click", lukOm);
}

function omTretten() {
  console.log("omTretten");

  document.querySelector("#om13").removeEventListener("click", omTretten);

  document.querySelector("#omplus1").classList.add("hide");
  document.querySelector("#omplus2").classList.add("hide");
  document.querySelector("#omplus3").classList.add("hide");
  document.querySelector("#omplus4").classList.add("hide");
  document.querySelector("#omplus5").classList.add("hide");
  document.querySelector("#omplus6").classList.add("hide");
  document.querySelector("#omplus7").classList.add("hide");
  document.querySelector("#omplus8").classList.add("hide");
  document.querySelector("#omplus9").classList.add("hide");
  document.querySelector("#omplus10").classList.add("hide");
  document.querySelector("#omplus11").classList.add("hide");
  document.querySelector("#omplus12").classList.add("hide");
  document.querySelector("#omplus14").classList.add("hide");

  document.querySelector("#om1").addEventListener("click", omEt);
  document.querySelector("#om2").addEventListener("click", omTo);
  document.querySelector("#om3").addEventListener("click", omTre);
  document.querySelector("#om4").addEventListener("click", omFire);
  document.querySelector("#om5").addEventListener("click", omFem);
  document.querySelector("#om6").addEventListener("click", omSeks);
  document.querySelector("#om7").addEventListener("click", omSyv);
  document.querySelector("#om8").addEventListener("click", omOtte);
  document.querySelector("#om9").addEventListener("click", omNi);
  document.querySelector("#om10").addEventListener("click", omTi);
  document.querySelector("#om11").addEventListener("click", omElleve);
  document.querySelector("#om12").addEventListener("click", omTolv);
  document.querySelector("#om14").addEventListener("click", omFjorten);

  document.querySelector("#omplus13").classList.remove("hide");
  document.querySelector("#x13").addEventListener("click", lukOm);
}

function omFjorten() {
  console.log("omFjorten");

  document.querySelector("#om14").removeEventListener("click", omFjorten);

  document.querySelector("#omplus1").classList.add("hide");
  document.querySelector("#omplus2").classList.add("hide");
  document.querySelector("#omplus3").classList.add("hide");
  document.querySelector("#omplus4").classList.add("hide");
  document.querySelector("#omplus5").classList.add("hide");
  document.querySelector("#omplus6").classList.add("hide");
  document.querySelector("#omplus7").classList.add("hide");
  document.querySelector("#omplus8").classList.add("hide");
  document.querySelector("#omplus9").classList.add("hide");
  document.querySelector("#omplus10").classList.add("hide");
  document.querySelector("#omplus11").classList.add("hide");
  document.querySelector("#omplus12").classList.add("hide");
  document.querySelector("#omplus13").classList.add("hide");

  document.querySelector("#om1").addEventListener("click", omEt);
  document.querySelector("#om2").addEventListener("click", omTo);
  document.querySelector("#om3").addEventListener("click", omTre);
  document.querySelector("#om4").addEventListener("click", omFire);
  document.querySelector("#om5").addEventListener("click", omFem);
  document.querySelector("#om6").addEventListener("click", omSeks);
  document.querySelector("#om7").addEventListener("click", omSyv);
  document.querySelector("#om8").addEventListener("click", omOtte);
  document.querySelector("#om9").addEventListener("click", omNi);
  document.querySelector("#om10").addEventListener("click", omTi);
  document.querySelector("#om11").addEventListener("click", omElleve);
  document.querySelector("#om12").addEventListener("click", omTolv);
  document.querySelector("#om13").addEventListener("click", omTretten);

  document.querySelector("#omplus14").classList.remove("hide");
  document.querySelector("#x14").addEventListener("click", lukOm);
}

function lukOm() {
  console.log("lukOm");

  this.parentElement.classList.add("hide");

  document.querySelector("#om1").addEventListener("click", omEt);
  document.querySelector("#om2").addEventListener("click", omTo);
  document.querySelector("#om3").addEventListener("click", omTre);
  document.querySelector("#om4").addEventListener("click", omFire);
  document.querySelector("#om5").addEventListener("click", omFem);
  document.querySelector("#om6").addEventListener("click", omSeks);
  document.querySelector("#om7").addEventListener("click", omSyv);
  document.querySelector("#om8").addEventListener("click", omOtte);
  document.querySelector("#om9").addEventListener("click", omNi);
  document.querySelector("#om10").addEventListener("click", omTi);
  document.querySelector("#om11").addEventListener("click", omElleve);
  document.querySelector("#om12").addEventListener("click", omTolv);
  document.querySelector("#om13").addEventListener("click", omTretten);
  document.querySelector("#om14").addEventListener("click", omFjorten);

  document.querySelector(".x").removeEventListener("click", lukOm);
}
