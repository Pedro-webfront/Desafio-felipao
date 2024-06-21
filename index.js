var nome = prompt("Nome do herói")
var experiecia = prompt("Experiecia do herói")
var nivel = "ferro"

if (experiecia <= 1000) {
    nivel = "Ferro"
    window.alert("o herói de nome " + nome + " esta no nivel " + nivel)
}
else if(experiecia >= 1001 && experiecia <= 2000) {
    nivel = "Bronze"
    window.alert("o herói de nome " + nome + "esta no nivel " + nivel)
}   
else if(experiecia >= 2001 && experiecia <= 5000) {
    nivel = "Prata"
    window.alert("o herói de nome " + nome + " esta no nivel " + nivel)
}
else if(experiecia >= 5001 && experiecia <= 7000) {
    nivel = "Ouro"
    window.alert("o herói de nome " + nome + " esta no nivel " + nivel)
}
else if(experiecia >= 7001 && experiecia <= 8000) {
    nivel = "Platina"
    window.alert("o herói de nome " + nome + " esta no nivel " + nivel)
}
else if(experiecia >= 8001 && experiecia <= 9000) {
    nivel = "Ascendente"
    window.alert("o herói de nome " + nome + " esta no nivel " + nivel)
}
else if (experiecia >= 9001 && experiecia <= 10000) {
    nivel = "Imortal"
    window.alert(" o herói de nome " + nome + " esta no nivel " + nivel)
}
else {
    nivel = "Radiante"
    window.alert(" o herói de nome " + nome + " esta no nivel " + nivel)
}