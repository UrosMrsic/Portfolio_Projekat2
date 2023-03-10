function validacija(){
    var email = document.rezervacija.email.value;
    var telefon = document.rezervacija.telefon.value;
    var imefilma = document.rezervacija.imefilma.value;
    var termin = document.rezervacija.termin.value;
    var brojKarata = document.rezervacija.brojKarata.value;

    if(email === null || email == "") {
        alert("Unesite pravilan e-mail.");
    }
    else if(telefon === null || telefon == "") {
        alert("Unesite broj telefona.");
    }
    else if(imefilma === null || imefilma == "") {
        alert("Izaberite film!");
    }
    else if(termin === null || termin == "") {
        alert("Izaberite termin!");
    }
    else if(brojKarata === null || brojKarata == "") {
        alert("Unesite broj karata.");
    }
    else {
        alert("Uspesno ste poslali rezervaciju. Mozete je proveriti klikom na dugme 'Proveri podatke'.")
        sacuvajPodatke();
    }
}