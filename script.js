//Lyt efter klik på alle elementer
øl.addEventListener("mousedown", klik_øl);
snaps.addEventListener("mousedown", klik_snaps);
faxe.addEventListener("mousedown", klik_faxe);
sodavand.addEventListener("mousedown", klik_sodavand);

document.querySelector("#øl").klik_øl();

function mousedown() {
  if (mousedown) {
    console.log("indeholder alkohol");
}
else {
    console.log("none");
}
}

function klik_øl() {

  if (mousedown) {
      console.log("indeholder alkohol");
  }
  else {
      console.log("none");
  }
} 