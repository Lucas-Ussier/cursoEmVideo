function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")

    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 1 && hora < 12){
        img.src ="manha.png"
        msg.innerHTML += `Bom dia`
        document.body.style.background = "#fde782"
    }else if(hora >= 12 && hora < 18){
        document.body.style.background = "#fda211"
        msg.innerHTML += `Boa Tarde`
        img.src = "tarde.png"
    }else{
        document.body.style.background = "#042853"
        msg.innerHTML += `Boa Noite`
        img.src ="noite.png"
    }


}
