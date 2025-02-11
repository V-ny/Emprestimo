const btnCalcular = document.querySelector('#btnCalcular')
btnCalcular.addEventListener("click",calcularEmprestimo)

function inserirNovaLinha(emprestimo){
    let trEmprestimo = document.createElement('tr')
    let tdNumeracao = document.createElement('td')
    let tdContratante = document.createElement('td')
    let tdValor = document.createElement('td')
    let tdParcela = document.createElement('td')
    let tdJuros = document.createElement('td')

    trEmprestimo.appendChild(tdNumeracao)
    trEmprestimo.appendChild(tdContratante)
    trEmprestimo.appendChild(tdValor)
    trEmprestimo.appendChild(tdParcela)
    trEmprestimo.appendChild(tdJuros)

    tdNumeracao.textContent = emprestimo.numero
    tdContratante.textContent = emprestimo.contratante
    tdValor.textContent = emprestimo.valor
    tdParcela.textContent = emprestimo.valorParcela
    tdJuros.textContent = emprestimo.valorJuros

    let tbody = document.querySelector('tbody')
    tbody.appendChild(trEmprestimo)

}

function calcularEmprestimo(){
    let inContrate = document.querySelector("#inContratante").value
    let inValor = document.querySelector("#inValor").value
    inValor = parseFloat(inValor)
    let inJuros = document.querySelector('#inJuros').value
    inJuros = parseFloat(inJuros)
    let parcela = document.querySelector('#inParcela').value
    parcela = parseFloat(parcela)
    let emprestimo = {
        numero: geraNumero(),
        contratante: inContrate,
        valor: inValor.toLocaleString('pt-br',{style: 'currency', currency:'BRL'}),
        valorParcela: calculaParcela(inValor, parcela, inJuros).toLocaleString('pt-br',{style: 'currency', currency:'BRL'}),
        valorJuros: calcularJuros(inValor, inJuros).toLocaleString('pt-br',{style: 'currency', currency:'BRL'})
    }

    inserirNovaLinha(emprestimo)
    console.log(emprestimo)
}

function geraNumero(){
    let tbody = document.querySelector('tbody')
    let tr = tbody.querySelectorAll('tr')
    let numero = tr.length +1
    return numero
}

function calcularJuros(valor,inJuros){
    let juros = valor * (inJuros/100)
    return juros 
}

function calculaParcela(valor, parcela, juros){
    let calculoJuros = calcularJuros(valor, juros)
    let valorParcela = (valor+calculoJuros)/parcela
    return valorParcela
}