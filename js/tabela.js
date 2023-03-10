let email = localStorage.getItem("email");
let telefon = localStorage.getItem("telefon");
let imefilma = localStorage.getItem("imefilma");
let brojKarata = localStorage.getItem("brojKarata");
let izabraniTermin = localStorage.getItem("izabraniTermin");

document.getElementById("email").innerHTML = email;
document.getElementById("telefon").innerHTML = telefon;
document.getElementById("imefilma").innerHTML = imefilma;
document.getElementById("brojKarata").innerHTML = brojKarata;
document.getElementById("izabraniTermin").innerHTML = izabraniTermin;

if(document.getElementById("email").innerHTML == "") {
  alert(asd);
}

function obrisiPodatke() {
  localStorage.clear();
  document.getElementById("email").innerHTML = " ";
  document.getElementById("telefon").innerHTML = " ";
  document.getElementById("imefilma").innerHTML = " ";
  document.getElementById("brojKarata").innerHTML = " ";
  document.getElementById("izabraniTermin").innerHTML = " ";
  document.getElementById("tabela").innerHTML = '<h3>Molimo Vas da se vratite na stranicu za rezervacije kako biste rezervisali novi termin.</h3><div class="podela-12"><button class="link-dugme bela-pozadina"><a href="rezervacije.html">Povratak na rezervaciju</a></button></div>';
}
