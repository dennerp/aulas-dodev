let nome = ""
let idade = 0
let cartaMotorista = ""
let carro = ""

nome = prompt("Qual seu nome?")
idade = parseInt(prompt("Qual sua idade?"))
cartaMotorista = prompt("Você tem carta de motorista? (sim/não)")
carro = prompt("Você tem carro? (sim/não)")

if(idade < 18 || cartaMotorista === "não") {
    console.log(nome + ", você não pode dirigir!")
} else if(idade >= 18 && cartaMotorista === "sim" && carro === "sim") {
    console.log(nome + ", você será o motorista!")
}else {
    console.log(nome + ", você pode dirigir mas não tem um carro! :(")
}
