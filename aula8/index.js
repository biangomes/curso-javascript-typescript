/* 
Beatriz Nascimento tem 24 anos, pesa 75 kg
tem 1.62 de altura e seu IMC é de não faço ideia
Beatriz nasceu em 1998.
*/
const nome = "Beatriz";
const sobrenome = "Nascimento";
const idade = 24;
const peso = 75;
const altura = 1.62;
let imc;        // peso / (altura*altura)
let anoNascimento;


imc = peso/(altura*altura);
anoNascimento = 2022-idade;

console.log(nome + " " + sobrenome + " tem " + idade + " anos, pesa " + peso + "kg\n");
console.log("tem " + altura + " de altura e seu IMC é de " + imc + "\n");
console.log(nome + " nasceu em " + anoNascimento);


console.log(`${nome} está testando template string, ela possui ${idade} anos.`);