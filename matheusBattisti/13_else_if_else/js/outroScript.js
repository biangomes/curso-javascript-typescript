function validaExtensao(arquivoDeEntrada) {
    
    let entrada = document.getElementById("arquivo").value;

    console.log(typeof(entrada));

    if (entrada.slice(entrada.length - 3, entrada.length) != "csv") {
        console.error("not a valid file");
        return true;
    } else {
        console.log("submited successfully");
        return false;
    }
}