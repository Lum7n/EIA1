//Daten - Emissionen 2008
var emiAfrica08 = 1028;
var emiSoAm08 = 1132.6;
var emiEurope08 = 4965.7;
var emiNoAm08 = 6600.4;
var emiAsia08 = 12954.7;
var emiAus08 = 1993;
//Daten - Emissionen 2018
var emiAfrica18 = 1235.5;
var emiSoAm18 = 1261.5;
var emiEurope18 = 4209.3;
var emiNoAm18 = 6035.6;
var emiAsia18 = 16274.1;
var emiAus18 = 2100.5;
//Rechenen
var gesWorld08 = emiAfrica08 + emiSoAm08 + emiEurope08 + emiAsia08 + emiNoAm08 + emiAus08;
var gesWorld18 = emiAfrica18 + emiSoAm18 + emiEurope18 + emiAsia18 + emiNoAm18 + emiAus18;
var AnteilAfricaWorld = (emiAfrica18 / gesWorld18) * 100;
var Prozent08to18Africa = (emiAfrica18 / emiAfrica08) * 100;
var CO208to18Africa = emiAfrica18 - emiAfrica08;
var AnteilSoAmWorld = (emiSoAm18 / gesWorld18) * 100;
var Prozent08to18SoAm = (emiSoAm18 / emiSoAm08) * 100;
var CO208to18SoAm = emiSoAm18 - emiSoAm08;
var AnteilEuropeWorld = (emiEurope18 / gesWorld18) * 100;
var Prozent08to18Europe = (emiEurope18 / emiEurope08) * 100;
var CO208to18Europe = emiEurope18 - emiEurope08;
var AnteilNoAmWorld = (emiNoAm18 / gesWorld18) * 100;
var Prozent08to18NoAm = (emiNoAm18 / emiNoAm08) * 100;
var CO208to18NoAm = emiNoAm18 - emiNoAm08;
var AnteilAsiaWorld = (emiAsia18 / gesWorld18) * 100;
var Prozent08to18Asia = (emiAsia18 / emiAsia08) * 100;
var CO208to18Asia = emiAsia18 - emiAsia08;
var AnteilAusWorld = (emiAus18 / gesWorld18) * 100;
var Prozent08to18Aus = (emiAus18 / emiAus08) * 100;
var CO208to18Aus = emiAus18 - emiAus08;
//Text-Teile
var s1a = "Die Emission von ";
var s1b = "ist: ";
var s1c = "(2018)";
var s2a = "Relativ zur Gesamtemission der Welt verursacht ";
var s2b = "damit ";
var s3a = "Für ";
var s3b = "hat sich, 2018 im Vergleich zu 2008, die Emission um ";
var s3c = " verändert.";
var s4a = "In 2018, im Vergleich zu 2008, sind das ";
var Einheit1 = "Mt CO².";
var Einheit2 = "%";
var Pkt = ".";
var Africa = "Africa ";
var SoAm = "South America ";
var Europe = "Europe ";
var NoAm = "North America ";
var Asia = "Asia ";
var Aus = "Australia ";
//Africa
function AfricaF() {
    document.querySelector("#Descrip").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("#absolute").innerHTML = "1235,5Mt";
    document.querySelector("#text_absolute").innerHTML = "Emission absolute of </br> Africa in 2018";
    document.querySelector("#relativ_to_world").innerHTML = "3.97%";
    document.querySelector("#growth_rate_percent").innerHTML = "20.19%";
    document.querySelector("#growth_rate_value").innerHTML = "207,5Mt";
    document.querySelector(".chart").setAttribute("style", "height:" + AnteilAfricaWorld + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".africa").addEventListener("click", AfricaF);
});
//South America
function SoAmF() {
    document.querySelector("#Descrip").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector("#absolute").innerHTML = "1261,5Mt";
    document.querySelector("#text_absolute").innerHTML = "Emission absolute of </br> South America in 2018";
    document.querySelector("#relativ_to_world").innerHTML = "4.05%";
    document.querySelector("#growth_rate_percent").innerHTML = "11.38%";
    document.querySelector("#growth_rate_value").innerHTML = "128.9Mt";
    document.querySelector(".chart").setAttribute("style", "height:" + AnteilSoAmWorld + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".southamerica").addEventListener("click", SoAmF);
});
//Europe
function EuropeF() {
    document.querySelector("#Descrip").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#absolute").innerHTML = "4209,3Mt";
    document.querySelector("#text_absolute").innerHTML = "Emission absolute of </br> Europe in 2018";
    document.querySelector("#relativ_to_world").innerHTML = "13.53%";
    document.querySelector("#growth_rate_percent").innerHTML = "-15.23%";
    document.querySelector("#growth_rate_value").innerHTML = "-756.4Mt";
    document.querySelector(".chart").setAttribute("style", "height:" + AnteilEuropeWorld + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", EuropeF);
});
//North America
function NoAmF() {
    document.querySelector("#Descrip").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector("#absolute").innerHTML = "6035,6Mt";
    document.querySelector("#text_absolute").innerHTML = "Emission absolute of </br> North America in 2018";
    document.querySelector("#relativ_to_world").innerHTML = "19.4%";
    document.querySelector("#growth_rate_percent").innerHTML = "-8.56%";
    document.querySelector("#growth_rate_value").innerHTML = "-564.8Mt";
    document.querySelector(".chart").setAttribute("style", "height:" + AnteilNoAmWorld + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".northamerica").addEventListener("click", NoAmF);
});
//Asia
function AsiaF() {
    document.querySelector("#Descrip").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector("#absolute").innerHTML = "16274,1Mt";
    document.querySelector("#text_absolute").innerHTML = "Emission absolute of </br> Asia in 2018";
    document.querySelector("#relativ_to_world").innerHTML = "52.3%";
    document.querySelector("#growth_rate_percent").innerHTML = "25.62%";
    document.querySelector("#growth_rate_value").innerHTML = "3319.4Mt";
    document.querySelector(".chart").setAttribute("style", "height:" + AnteilAsiaWorld + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".asia").addEventListener("click", AsiaF);
});
//Australia
function AusF() {
    document.querySelector("#Descrip").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector("#absolute").innerHTML = "2100,5Mt";
    document.querySelector("#text_absolute").innerHTML = "Emission absolute of </br> Australia in 2018";
    document.querySelector("#relativ_to_world").innerHTML = "6.8%";
    document.querySelector("#growth_rate_percent").innerHTML = "5.4%";
    document.querySelector("#growth_rate_value").innerHTML = "107.5 CO2";
    document.querySelector(".chart").setAttribute("style", "height:" + AnteilAusWorld + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".australia").addEventListener("click", AusF);
});
//Ausgabe, Console
console.log(s1a + Africa + s1b + emiAfrica18 + Einheit1 + s1c);
console.log(s2a + Africa + s2b + AnteilAfricaWorld + Einheit2 + Pkt);
console.log(s3a + Africa + s3b + Prozent08to18Africa + Einheit2 + s3c);
console.log(s4a + CO208to18Africa + Einheit1);
console.log(" ");
console.log(s1a + SoAm + s1b + emiSoAm18 + Einheit1 + s1c);
console.log(s2a + SoAm + s2b + AnteilSoAmWorld + Einheit2 + Pkt);
console.log(s3a + SoAm + s3b + Prozent08to18SoAm + Einheit2 + s3c);
console.log(s4a + CO208to18SoAm + Einheit1);
console.log(" ");
console.log(s1a + Europe + s1b + emiEurope18 + Einheit1 + s1c);
console.log(s2a + Europe + s2b + AnteilEuropeWorld + Einheit2 + Pkt);
console.log(s3a + Europe + s3b + Prozent08to18Europe + Einheit2 + s3c);
console.log(s4a + CO208to18Europe + Einheit1);
console.log(" ");
console.log(s1a + NoAm + s1b + emiNoAm18 + Einheit1 + s1c);
console.log(s2a + NoAm + s2b + AnteilNoAmWorld + Einheit2 + Pkt);
console.log(s3a + NoAm + s3b + Prozent08to18NoAm + Einheit2 + s3c);
console.log(s4a + CO208to18NoAm + Einheit1);
console.log(" ");
console.log(s1a + Asia + s1b + emiAsia18 + Einheit1 + s1c);
console.log(s2a + Asia + s2b + AnteilAsiaWorld + Einheit2 + Pkt);
console.log(s3a + Asia + s3b + Prozent08to18Asia + Einheit2 + s3c);
console.log(s4a + CO208to18Asia + Einheit1);
console.log(" ");
console.log(s1a + Aus + s1b + emiAus18 + Einheit1 + s1c);
console.log(s2a + Aus + s2b + AnteilAusWorld + Einheit2 + Pkt);
console.log(s3a + Aus + s3b + Prozent08to18Aus + Einheit2 + s3c);
console.log(s4a + CO208to18Aus + Einheit1);
console.log(" ");
console.log("Gesamt Emission 2008: " + gesWorld08 + Einheit1);
console.log("Gesamt Emission 2018: " + gesWorld18 + Einheit1);
//# sourceMappingURL=emission.js.map