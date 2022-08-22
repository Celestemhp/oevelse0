//Lyt efter klik på alle elementer
snaps.addEventListener("mousedown", klik_snaps);
faxe.addEventListener("mousedown", klik_faxe);
sodavand.addEventListener("mousedown", klik_sodavand);

document.querySelector("#øl").klik_øl();
document.addEventListener("mousedown", klik_øl);


var klik_øl = document.getElementById("#øl");

function klik_øl() {
  if (klik_øl = true) {
    console.log("indeholder alkohol"); 
  } 
  else (klik_øl = false); {
    console.log(none); 
  }
}


