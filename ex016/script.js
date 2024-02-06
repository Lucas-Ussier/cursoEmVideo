function clicar(){
    var out = document.getElementById("out")
    var inicio = document.getElementById("firstnum")
    var fim = document.getElementById("lastnum")
    var passo = document.getElementById("passnum")

    var inicioNum = Number(inicio.value)
    var fimNum = Number(fim.value)
    var passoNum = Number(passo.value)

    var outText = ""

  if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert("[ERRO] Faltam Dados!")
    out.innerHTML = "Impossível contar!"
  }else{

        if(inicioNum < fimNum){
            out.innerHTML = "Contando crescente: <br>"
            while (inicioNum <= fimNum) {
                if(passoNum == 0){
                    window.alert("Impossível fazer o contador com passo igual a zero, considerando passo 1")
                    passoNum = 1
                    continue
                }
            
                outText += inicioNum
                inicioNum += passoNum

                if(inicioNum <= fimNum){
                    outText += String.fromCodePoint(0x1F449)
                }else{
                    outText += String.fromCodePoint(0x1F3C1)
                }
            }
            out.innerHTML += outText
        }else{
            out.innerHTML = "Contando decrescente: <br>"
            while (inicioNum >= fimNum) {
                if(passoNum == 0){
                    window.alert("Impossível fazer o contador com passo igual a zero, considerando passo 1")
                    passoNum = 1
                    continue
                }
            
                outText += inicioNum
                inicioNum -= passoNum

                if(inicioNum >= fimNum){
                    outText += String.fromCodePoint(0x1F449)
                }else{
                    outText += String.fromCodePoint(0x1F3C1)
                }
            }
            out.innerHTML += outText
        }
        
    }
}