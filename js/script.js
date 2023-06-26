
// variaveis chamando os elementos por id 
var categoria = document.getElementById("categoria")
var opcoesEntrada = document.getElementById("opcoes-entrada")
var opcoesSaida = document.getElementById("opcoes-saida")
var botao = document.getElementById("botao")
var valor = document.getElementById("valor")
var resultado = document.getElementById("resultado")


//  Utilizando o addEventListener pra quando selecionar a categoria aparecer as outras opções de medida, no campo de unidade de entrada e de saida.
// Utilizado a função anonima pois ela só é executada dentro do próprio escopo e não é reutilizada.
categoria.addEventListener("change", function () {
    if (categoria.value == "temperatura") {
        opcoesEntrada.innerHTML = ` 
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>`
        opcoesSaida.innerHTML = ` 
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>`
    } else if (categoria.value == "comprimento") {
        opcoesEntrada.innerHTML = ` 
        <option value="metros">Metros</option>
        <option value="centimetros">Centimetros</option>
        <option value="polegas">Polegadas</option>`
        opcoesSaida.innerHTML = ` 
        <option value="metros">Metros</option>
        <option value="centimetros">Centimetros</option>
        <option value="polegas">Polegadas</option>`
    } else if (categoria.value == "peso") {
        opcoesEntrada.innerHTML = ` 
        <option value="kg">Kg</option>
        <option value="gramas">Gramas</option>
        <option value="libras">Libras</option>`
        opcoesSaida.innerHTML = `  if()
        <option value="kg">Kg</option>
        <option value="gramas">Gramas</option>
        <option value="libras">Libras</option>`
    }
})
// Utilizado pra página não ficar reiniciando quando clica no botão. 
botao.addEventListener('click', (event) => event.preventDefault());

// Utilizado o addEventListener quando clicar, se o value da opção de entrada for igual a celsius e o value da saida for igual a fr o resultado executa a função celsiusPFr que faz a conversão de celsius para fr e assim por diante. 
botao.addEventListener('click', function(){     
    var pegarValor = +valor.value
    if (opcoesEntrada.value == "celsius" && opcoesSaida.value == "fahrenheit") {
        resultado.innerText = celsiusPFr(pegarValor)
    } else if (opcoesEntrada.value == "celsius" && opcoesSaida.value == "kelvin") { 
        resultado.innerText = celsiusPKelvin(pegarValor)
    } else if (opcoesEntrada.value == "fahrenheit" && opcoesSaida.value == "celsius") {
        resultado.innerText = frPCelsius(pegarValor)
    } else if (opcoesEntrada.value == "fahrenheit" && opcoesSaida.value == "kelvin") {
        resultado.innerText = frPKelvin(pegarValor)
    } else if (opcoesEntrada.value == "kelvin" && opcoesSaida.value == "celsius") {
        resultado.innerText = kelvinPCelsius(pegarValor)
    } else if (opcoesEntrada.value == "kelvin" && opcoesSaida.value == "fahrenheit") {
        resultado.innerText = kelvinPFrs(pegarValor)
    } else if (opcoesEntrada.value == "kg" && opcoesSaida.value == "gramas") {
        resultado.innerText = kgParaGrama(pegarValor)
    } else if (opcoesEntrada.value == "gramas" && opcoesSaida.value == "kg") {
        resultado.innerText = gramaPKg(pegarValor)
    } else if (opcoesEntrada.value == "gramas" && opcoesSaida.value == "libras") {
        resultado.innerText = gramaPLibra(pegarValor)
    }  else if (opcoesEntrada.value == "libras" && opcoesSaida.value == "gramas") {
        resultado.innerText = libraPGrama(pegarValor)
    }   else if (opcoesEntrada.value == "kg" && opcoesSaida.value == "libras") {
        resultado.innerText = kgPLibra(pegarValor)
    }   else if (opcoesEntrada.value == "libras" && opcoesSaida.value == "kg") {
        resultado.innerText = libraPKg(pegarValor)
    }    else if (opcoesEntrada.value == "centimetros" && opcoesSaida.value == "polegadas") {
        resultado.innerText = centPPolegada(pegarValor)
    }  else if (opcoesEntrada.value == "polegadas" && opcoesSaida.value == "centimetros") {
        resultado.innerText = polegadaPCent(pegarValor)
    } else if (opcoesEntrada.value == "centimetros" && opcoesSaida.value == "metros") {
        resultado.innerText = centPMetro(pegarValor)
    }  else if (opcoesEntrada.value == "metros" && opcoesSaida.value == "centimetros") {
        resultado.innerText = metroPCent(pegarValor)
    }  else if (opcoesEntrada.value == "metros" && opcoesSaida.value == "polegadas") {
        resultado.innerText = metroPPolegada(pegarValor)
    }  else if (opcoesEntrada.value == "polegadas" && opcoesSaida.value == "metros") {
        resultado.innerText = polegadaPMetro(pegarValor)
    }
}) 



// unidades de peso, funções com a operação de conversão 
function kgParaGrama(kg) {
    var grama = kg * 1000
    return grama
}

function gramaPKg(grama) {
    var kg = grama / 1000
    return kg
}

function gramaPLibra(grama) {
    var kg = gramaPKg(grama)
    var libra = kgPLibra(kg)
    return libra
}

function libraPGrama(libra) {
    var kg = libraPKg(libra)
    var grama = kgParaGrama(kg)
    return grama
}

function kgPLibra(kg) {
    var libra = kg * 0.45
    return libra
}

function libraPKg(libra) {
    var kg = libra / 0.45
    return kg
}

// unidade de temperatura, funções com a operação de conversão 
function celsiusPFr(celsius) {
    var fr = (celsius * 9 / 5) + 32
    return fr
}

function frPCelsius(fr) {
    var celsius = (fr - 32) * 5 / 9
    return celsius
}

function celsiusPKelvin(celsius) {
    var kelvin = celsius + 273.15
    return kelvin
}
function kelvinPCelsius(kelvin) {
    var celsius = kelvin - 273.15
    return celsius
}

function frPKelvin(fr) {
    var celsius = frPCelsius(fr)
    var kelvin = celsiusPKelvin(celsius)
    return kelvin
}

function kelvinPFr(kelvin) {
    var celsius = kelvinPCelsius(kelvin)
    var fr = celsiusPFr(celsius)
    return fr
}

// unidade de comprimento, funções com a operação de conversão 
function centPPolegada(cent) {
    var polegada = cent / 2.4
    return polegada
}

function polegadaPCent(polegada) {
    var cent = polegada * 2.4
    return cent
}

function centPMetro(cent) {
    var metro = cent / 100
    return metro
}

function metroPCent(metro) {
    var cent = metro * 100
    return cent
}

function metroPPolegada(metro) {
    var cent = metroPCent(metro)
    var polegada = centPPolegada(cent)
    return polegada
}

function polegadaPMetro(polegada) {
    var cent = polegadaPCent(polegada)
    var metro = centPMetro(cent)
    return metro
}

