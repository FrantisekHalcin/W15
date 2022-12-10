

function analyzuj() {


    let vstup = document.getElementById("textin").value;


    let vstupBezMedzier = vstup.match(/\S/g);

    let cisla = vstup.match(/\d/g);
    let pocetCisel;

    let slova = vstup.split(" ");

    let najdlhsieSlovo = "";
    let najviacPismen = 0;

    if (cisla == null) {
        pocetCisel = 0;
    } else { pocetCisel = cisla.length; }

    for (let i = 0; i < slova.length; i++) {
        if (slova[i].length == najviacPismen) {

            najdlhsieSlovo += ", " + slova[i];
        } if (slova[i].length > najviacPismen) {
            najviacPismen = slova[i].length;
            najdlhsieSlovo = slova[i];
        }

    }

    document.getElementById("result").innerText = "Celkový počet znakov (vrátane medzier) = " + vstup.length + "\n\nCelkový počet znakov (bez medzier) = " + vstupBezMedzier.length + "\n\nCelkový počet čísel = " + pocetCisel + "\n\nNajdlhšie slovo = " + najdlhsieSlovo + "\n\nPočet znakov najdlhšieho slova = " + najviacPismen;

}

function vyhladaj() {
    let vstup = document.getElementById("textin").value;
    let hladanyText = document.getElementById("seek").value;
    let najdene = vstup.search(hladanyText);
    if (najdene != -1) {
        document.getElementById("result").innerText = "Hľadaný výraz sa v texte nachádza na " + parseInt(najdene + 1) + ".znaku.";
    } else {
        document.getElementById("result").innerText = "Hľadaný výraz sa v texte nenachádza";
    }
}

function zasifruj() {
    let vstup = document.getElementById("textin").value;
    let sifra = vstup.replaceAll(/o/g, "0");
    sifra = sifra.replaceAll(/O/g, "0");
    sifra = sifra.replaceAll(/i/g, "1");
    sifra = sifra.replaceAll(/I/g, "1");
    sifra = sifra.replaceAll(/e/g, "3");
    sifra = sifra.replaceAll(/E/g, "3");
    sifra = sifra.replaceAll(/a/g, "4");
    sifra = sifra.replaceAll(/A/g, "4");
    sifra = sifra.replaceAll(/s/g, "5");
    sifra = sifra.replaceAll(/S/g, "5");
    sifra = sifra.replaceAll(/b/g, "8");
    sifra = sifra.replaceAll(/B/g, "8");
    document.getElementById("result").innerText = sifra;
}
