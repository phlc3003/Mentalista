var numero = parseInt(Math.random() * 100)
var tentativas = 5
var palpite = parseInt(prompt("Digite um número de 0 a 100"))

while (tentativas > 0) {
  if(numero == palpite){
    alert("Parabéns! Você acertou!!!")
    break
  }
  if(numero < palpite){
    alert("Errado. O número secreto é menor.")
    tentativas = tentativas - 1
    var palpite = parseInt(prompt("Digite um número de 0 a 100"))
  }
  if(numero > palpite){
    alert("Errado. O número secreto é maior.")
    tentativas = tentativas - 1
    var palpite = parseInt(prompt("Digite um número de 0 a 100"))
  }
}

if(tentativas <= 0) {
  alert("Acabaram as tentativas. O número secreto era " + numero + ".")
}
  