let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
// ! - significa não em js

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = '' // Limpar
    num.focus() // volta o cursor de forma automatica
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0 
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong>${tot}</strong> números cadastrados</p>`
        res.innerHTML+= `<p>O maior valor informado foi <strong>${maior}</strong><p/>`
        res.innerHTML+= `<p>O menor valor informado foi <strong>${menor}</strong><p/>`
        res.innerHTML += `<p>A soma entre estes valores é <strong>${soma}</strong></p>`
        res.innerHTML += `<p>A média entre os valores é <strong>${media}</strong></p>`
    }
}

    // Adiciona um event listener para o evento 'keydown' no campo de entrada
    document.getElementById('fnum').addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é 'Enter' (código 13)
    if (event.key === 'Enter')  {
        // Chama a função adicionar() quando 'Enter' é pressionado
        adicionar();
        }
    })