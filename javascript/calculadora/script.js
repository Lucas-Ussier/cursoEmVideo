function calcular(){
    var out = window.document.getElementById("out")
    var op = document.getElementsByName("op")
    var num1txt = document.getElementById("num1txt")
    var num2txt = document.getElementById("num2txt")
    var outText = ''

    if(num1txt.value.length != 0 && num2txt.value.length != 0){
        var n1 = Number(num1txt.value)
        var n2 = Number(num2txt.value)
        if(op[0].checked){
            outText += `O resultado da Adição é ${n1 + n2}`
        }else if(op[1].checked){
            outText += `O resultado da Subtração é ${n1 - n2}`
            
        }else if(op[2].checked){
            outText += `O resultado da Multiplicação é ${n1 * n2}`
            
        }else{
            if(n2 != 0){
                outText += `O resultado da Divisão é ${n1 / n2}`
            }else{
                window.alert("[ERRO] Impossível dividir por ZERO!")
                outText += "Impossível dividir por ZERO!"
            }
        }
    }else{
        window.alert("[ERRO] Números faltando, preencha os dois campos para continuar")
        outText += "Aguardando números para a operação"
    }

    out.innerHTML = outText

   
}