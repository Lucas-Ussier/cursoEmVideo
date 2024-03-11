function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var inAno = document.getElementById("ano")
    var res = document.getElementById("out")
    

    if(inAno.value.length != 4 || inAno.value > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente.`)
    }else{
        var radios = document.getElementsByName("radiosex")
        var idade = ano - Number(inAno.value)
        var genero = ' '
        var imageName = ''

        if(radios[0].checked){
            genero = 'H'
            if(idade >= 0 && idade < 10){
                imageName = "criancaMasc.png"
            }else if(idade < 21){
                imageName = 'jovemMasc.png'
            }else if(idade < 65){
                imageName = 'adultoMasc.png'
            }else{
                imageName = 'idosoMasc.png'
            }
    
        }else{
            genero = 'F'
            if(idade >= 0 && idade < 10){
                imageName = "criancaFem.png"
            }else if(idade < 21){
                imageName = 'jovemFem.png'
            }else if(idade < 65){
                imageName = 'adultoFem.png'
            }else{
                imageName = 'idosoFem.png'
            }
        }


        res.innerHTML = `<img id=imagem src=${imageName} alt=imagem >`
        res.innerHTML += `<p> Idade: ${idade}</p>`
    }
}