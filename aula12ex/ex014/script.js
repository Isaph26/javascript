function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha (1).png'
        document.body.style.background = "#d5c498"
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = "tarde (1).png"
        document.body.style.background = "#ec9957"
    } else {
        // BOA NOITE!
        img.src = "noite (1).png"
        document.body.style.background = "#92959c"
    }
}
// cor manha: d5c498
// cor tarde: ec9957
// cor noite: 92959c