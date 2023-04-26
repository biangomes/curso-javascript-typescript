// Criando uma promise
const promise = new Promise((resolve, reject) => {

    // pode ser uma requisicao externa
    const nome = "Beatriz";

    if(nome === "Beatriz") {
        resolve("Usuário encontrado");
    } else {
        reject("Usuário não encontrado");
    }

});

promise.then((data) => {
    console.log(data);
})

// Encadeamento de thens
const Promise2 = new Promise((resolve, reject) => {
    const nome = 'bea';

    if (nome === 'bea') {
        resolve('usuario encontrado');
    } else {
        reject('usuario nao encontrado');
    }
});

Promise2.then((data) => {
    return data.toLowerCase()
}).then((stringModificada) => {
    console.log(stringModificada)
})