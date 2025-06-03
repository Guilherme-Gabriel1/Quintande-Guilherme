const inicioPrograma = Number(prompt(`
    ========== Bem-Vinda ==========
          O que deseja comprar?
    ===============================
        Selecione uma opção:
    _______________________________
    [1]  -  Banana
    [2]  -  Maça
    [3]  -  Manga
    [4]  -  Laranja
    [5]  -  Limão
    `))



function comprarBanana() {
    resultado = 0
    alert("Preço da banana é R$1,30 a unidade, apartir de 12 unidades o preço é R$1,00")

    var qtdBanana = Number(prompt("Quantas bananas você deseja comprar?"))

    if (qtdBanana <= 12) {
        resultado = qtdBanana * 1.30
        alert(`${qtdBanana} unidades de Banana sai à ${resultado.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
        })} Reais.`)
    }
    else {
        resultado = qtdBanana * 1.00
        alert(`${qtdBanana} unidades de Banana sai à ${resultado.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
        })} Reais.`)
    }
}
function comprarMaca() {
    resultado = 0
    alert("O KG da Maça é R$8,55 apartir de 2KG sai por R$6,99.")

    var qtnMaca = Number(prompt("Quantos KG de Maça você deseja comprar?"))

    if (qtnMaca <= 2) {
        resultado = qtnMaca * 8.55
        alert(`${qtnMaca}KG de Maça sai à ${resultado.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
        })} Reais.`)
    }
    else {
        resultado = qtnMaca * 6.99
        alert(`${qtnMaca}KG de Maça sai à ${resultado.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
        })} Reais.`)
    }
}
function comprarManga() {
    var opcaoManga = Number(prompt(`
            Qual tipo de manga você vai comprar?
                [1] Palmer - R$5,49 Reais
                [2] Rosa   - R$10,00 Reais
                [3] Tommy  - R$2,00 Reais`))

    switch (opcaoManga) {
        case 1:
            calcularPrecoManga(5.49, "Palmer")
            break;
        case 2:
            calcularPrecoManga(10, "Rosa")
            break;
        case 3:
            calcularPrecoManga(2, "Tommy")
            break;
    }
}

function calcularPrecoManga(preco, marca) {
    const qntManga = prompt(`Quantos kg de manga ${marca} voce deseja comprar?`)
    resultado = qntManga * preco

    alert(`Você comprou ${qntManga}KG de Manga ${marca} e saiu no valor de ${resultado}`)
}



function comprarLaranja() {
    var resultado = 0

    var tipoLaranja = Number(prompt(`
            Qual tipo de larana você deseja comprar?
            [1] Laranja-pera R$ 5,99 KG, acima de 2KG R$ 5,00 KG
            [2] Laranja-lima R$ 3,00 KG, acima de 3KG R$ 2,00 KG
            [3] Laranja-bahia R$ 4,00 KG, acima de 4KG R$ 3,50 KG`))



    switch (tipoLaranja) {
        case 1:
            var qntLaranja = Number(prompt("Quantos KG de Laranja-Pera você deseja comprar?"))
            var resultado = qntLaranja * 5.99

            if (qntLaranja <= 2) {
                alert(`${qntLaranja}KG de Laranja-Pera dá ${resultado.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'

                })} Reais.`)
            }

            else {
                resultado = qntLaranja * 5.00
                alert(`${qntLaranja}KG de Laranja-Pera dá ${resultado.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'

                })} Reais.`)
            }
            break;

        case 2:
            var qntLaranja = Number(prompt("Quantos KG de Laranja-Lima você deseja comprar?"))
            resultado = qntLaranja * 3.00

            if (qntLaranja <= 3) {
                alert(`${qntLaranja}KG de Laranja-Lima dá ${resultado.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'

                })} Reais.`)
            }

            else {
                resultado = qntLaranja * 2.00
                alert(`${qntLaranja}KG de Laranja-Lima dá ${resultado.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'

                })} Reais.`)
            }
            break;

        case 3:
            var qntLaranja = Number(prompt("Quantos KG de Laranja-Bahia você deseja comprar?"))
            resultado = qntLaranja * 4.00
            if (qntLaranja <= 4) {
                alert(`${qntLaranja}KG de Laranja-Bahia dá ${resultado.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'

                })} Reais.`)
            }


            else {
                resultado = qntLaranja * 3.50
                alert(`${qntLaranja}KG de Laranja-Bahia dá ${resultado.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'

                })} Reais.`)
            }
            break;
    }
}


switch (inicioPrograma) {
    case 1:
        comprarBanana()
        break;
    case 2:
        comprarMaca()
        break;
    case 3:
        comprarManga()
        break;
    case 4:
        comprarLaranja()
        break;
    case 5:
        comprarLimao()
        break;

    default:
        break;
}
