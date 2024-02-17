function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img =  document.createElement('img')
        img.setAttribute('id', 'foto')
    } if (fsex[0].checked) {
        gênero = 'Homen'
        if (idade >= 0 && idade < 15) {
            //criança
            img.setAttribute('src','menino.png')
        } else if (idade < 25) {
          //jovem
            img.setAttribute('src','moço.png')
        } else if (idade < 50) {
          //adulto
            img.setAttribute('src','adulto.png')
        } else {
            //idoso
            img.setAttribute('src','senhor.png')
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src','menina.png')
        } else if (idade < 21) {
          //jovem  
          img.setAttribute('src','moça.png')
        } else if (idade < 50) {
          //adulto  
          img.setAttribute('src','adulta.png')
        } else {
            //idoso
            img.setAttribute('src','senhora.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}
