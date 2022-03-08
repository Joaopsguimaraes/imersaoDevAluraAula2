function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var cotacaoDolar = 5;
    var valorEmReal = valorEmDolarNumerico * cotacaoDolar;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em real é R$ " + valorEmReal + ".00";
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterEuro() {
    var elementoValor = document.getElementById("valor");
    var valorEuro = elementoValor.value;
    var valorEuroNumerico = parseFloat(valorEuro);
    var cotacaoEuro = 5.53;
    var valorReal = valorEuroNumerico * cotacaoEuro;
    var elementoValorConvertidoEuro = document.getElementById(
      "valorConvertidoEuro"
    );
    var valorConvertidoEuro = "O valor em Euro é E$: " + valorReal + ".00";
    elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
  }
  function ConverterBtc() {
    var elementoBtc = document.getElementById("valor");
    var valorBtc = elementoBtc.value;
    var valorBtcNumerico = parseFloat(valorBtc);
    var cotacaoBtc = 198767.52;
    var valorEmBtc = valorBtcNumerico / cotacaoBtc;
    var elementoValorConvertidoBtc = document.getElementById(
      "valorConvertidoBtc"
    );
    var valorConvertidoBtc = "O valor em Bitcoin é $: " + valorEmBtc;
    elementoValorConvertidoBtc.innerHTML = valorConvertidoBtc;
  }
  