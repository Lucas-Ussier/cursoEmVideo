function clicar(){
    var inNum = document.getElementById("inNum")
    
    var sel = document.getElementById("tabuada")
   
    
    if(inNum.value.length == 0){
        window.alert("Por favor digite um número")
    }else{
        var i = Number(inNum.value)
        sel.innerHTML= ''

        for (let c = 1; c <= 10 ; c++) {
            let item = document.createElement('option')
            item.innerHTML = `${i} x ${c} = ${i*c}`
            item.value = `tab${c}`
            sel.appendChild(item)
        }
    }

 
}