function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min)+min);
}

function espera(msg, tempo) {
    setTimeout(() => {
        console.log(msg)
    }, tempo);
}

espera("frase 1", aleatorio(1,3));
espera("frase 2", aleatorio(1,3));
espera("frase 3", aleatorio(1,3));
espera("frase 4", aleatorio(1,3));
espera("frase 5", aleatorio(1,3));
espera("frase 6", aleatorio(1,3));