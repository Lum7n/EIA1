//Daten - Emissionen 2008
var emiAfrica08: number = 1028;
var emiSoAm08: number = 1132.6;
var emiEurope08: number = 4965.7;
var emiNoAm08: number = 6600.4;
var emiAsia08: number = 12954.7;
var emiAus08: number = 1993;

//Daten - Emissionen 2018
var emiAfrica18: number = 1235.5;
var emiSoAm18: number = 1261.5;
var emiEurope18: number = 4209.3;
var emiNoAm18: number = 6035.6;
var emiAsia18: number = 16274.1;
var emiAus18: number = 2100.5;

//Rechenen

var gesWorld: number = emiAfrica18 + emiSoAm18 + emiEurope18 + emiAsia18 + emiNoAm18 + emiAus18;

var AnteilAfricaWorld: number = (emiAfrica18 / gesWorld) * 100;
var Prozent08to18Africa: number = (emiAfrica18 / emiAfrica08) * 100;
var CO208to18Africa: number = emiAfrica18 - emiAfrica08

var AnteilSoAmWorld: number = (emiSoAm18 / gesWorld) * 100;
var Prozent08to18SoAm: number = (emiSoAm18 / emiSoAm08) * 100;
var CO208to18SoAm: number = emiSoAm18 - emiSoAm08

var AnteilEuropeWorld: number = (emiEurope18 / gesWorld) * 100;
var Prozent08to18Europe: number = (emiEurope18 / emiEurope08) * 100;
var CO208to18Europe: number = emiEurope18 - emiEurope08

var AnteilNoAmWorld: number = (emiNoAm18 / gesWorld) * 100;
var Prozent08to18NoAm: number = (emiNoAm18 / emiNoAm08) * 100;
var CO208to18NoAm: number = emiNoAm18 - emiNoAm08

var AnteilAsiaWorld: number = (emiAsia18 / gesWorld) * 100;
var Prozent08to18Asia: number = (emiAsia18 / emiAsia08) * 100;
var CO208to18Asia: number = emiAsia18 - emiAsia08

var AnteilAusWorld: number = (emiAus18 / gesWorld) * 100;
var Prozent08to18Aus: number = (emiAus18 / emiAus08) * 100;
var CO208to18Aus: number = emiAus18 - emiAus08

//Text-Teile
var s1a: string = "Die Emission von ";
var s1b: string = "ist: ";
var s1c: string = "(2018)"

var s2a: string = "Relativ zur Gesamtemission der Welt verursacht ";
var s2b: string = "damit ";

var s3a: string = "Für ";
var s3b: string = "hat sich, 2018 im Vergleich zu 2008, die Emission um ";
var s3c: string = " verändert.";

var s4a: string = "In 2018, im Vergleich zu 2008, sind das ";

var Einheit1: string = "kg CO².";
var Einheit2: string = "%";
var Pkt: string = ".";

var Africa: string = "Africa ";
var SoAm: string = "South America ";
var Europa: string = "Europa ";
var NoAm: string = "North America ";
var Asia: string = "Asia ";
var Aus: string = "Australia ";

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

console.log(s1a + Europa + s1b + emiEurope18 + Einheit1 + s1c);
console.log(s2a + Europa + s2b + AnteilEuropeWorld + Einheit2 + Pkt);
console.log(s3a + Europa + s3b + Prozent08to18Europe + Einheit2 + s3c);
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