var numbers = []

function adicionar(){
    var sel = window.document.getElementById("numshow")
    var numtxt = window.document.getElementById("numtxt")
    var out = window.document.getElementById("out")
   

    if(numtxt.value.length == 0){
        window.alert("[ERRO] Favor adicionar um número para continuar")
    }else{
        if (numtxt.value > 0 && numtxt.value <= 100) {
            var num = Number(numtxt.value)
            if(numbers.indexOf(num) == -1){
                numbers.push(num) 
                
                var create = document.createElement('option')
                create.text = `O número ${num} foi adicionado`
                sel.appendChild(create)
    
            }else{
                window.alert("[ERRO] Valor já adicionado")
                
            }
        }else{
            window.alert("[ERRO] Favor adicionar um número entre 1 e 100 para continuar")
        }
    }
    out.innerHTML = ''
    numtxt.value = ""
    
}

function compararNumeros(a, b) {
    return a - b;
}
  

function finalizar(){
    var out = window.document.getElementById("out")
    

    var soma = 0

    for (let index = 0; index < numbers.length; index++) {
       soma += numbers[index]
    }
    numbers.sort(compararNumeros)

    out.innerHTML = `
        <p>Ao todo temos ${numbers.length} números cadastrados. </p>
        <p>O maior valor informado foi ${numbers[numbers.length - 1]}.</p>
        <p>O menor valor informado foi ${numbers[0]}. </p>
        <p>Somando todos os valores, temos ${soma}. </p>
        <p>A média dos valores informados é ${soma/numbers.length}. </p>
    `
}