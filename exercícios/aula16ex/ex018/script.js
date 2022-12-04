let num = document.getElementById('num')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function éNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function naList(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function guardar() {
    if(éNum(num.value) && !naList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] Digite um número válido ou ainda não digitado!')
    }
    num.value=''
    num.focus()
}

function finalizar() {
    if(valores.length <= 0) {
        window.alert('[ERRO] Adicione valores para finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
            soma += valores[pos]
        }
        media = soma / tot
        res.innerHTML += ''
        res.innerHTML += `<p>O total de números digitados foi ${tot}</p>`
        res.innerHTML += `<p>O maior número cadastrado foi ${maior}</p>`
        res.innerHTML += `<p>O menor número cadastrado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos números digitados foi ${soma}</p>`
        res.innerHTML += `<p>A media de números digitados foi ${media}</p>`
    }
}
