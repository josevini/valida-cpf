let cpf = "096.122.324-31"
// cpf = '111.111.111-11'
let novo_cpf = ""
for (pos in cpf) {
    if (cpf[pos] >= 0 && cpf[pos] <= 9) {
        novo_cpf += cpf[pos]
    }
}

let cont = 0
for (pos in novo_cpf) {
    if (pos == 0) {
        var p1 = novo_cpf[pos]
    } else {
        if (p1 == novo_cpf[pos]) {
            cont++
        }
    }
}

if (cont == (novo_cpf.length) - 1) {
    console.log('Iguais')
} else {
    console.log('Diferentes')
}