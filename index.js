function Numinserido(num) {
  if (typeof oVisor == "undefined") {
    document.calculadora.visor.value = "";
  }
  document.calculadora.visor.value = document.calculadora.visor.value + num;
  oVisor = 1;
}

function Limpar() {
  document.calculadora.visor.value = "";
  delete oValor;
  delete oOperacao;
  delete oVisor;
}
function Virgula() {
  document.calculadora.visor.value = document.calculadora.visor.value + ",";
}

// Função que executa as operações básicas da calculadora
function Operacao(oper, valor1, valor2) {
  switch (oper) {
    case "somar":
      var valor = parseFloat(valor1) + parseFloat(valor2);
      break;
    case "subtrair":
      var valor = valor1 - valor2;
      break;
    case "multiplicar":
      var valor = valor1 * valor2;
      break;
    case "dividir":
      var valorTeste = valor1 / valor2;
      if (valorTeste % 1 != 0) {
        var valor = valorTeste.toFixed(2);
      } else {
        var valor = valorTeste;
      }
      break;
    case "inverter":
      var valor = valor1 * -1;
      break;
    case "porcentagem":
      var valor = valor1 / 100;
      break;

    default:
      break;
  }
  return valor;
}
// Função do algoritmo de "passagem" das ações do usuário
function Operador(oper) {
  var valor = document.calculadora.visor.value;
  delete oVisor;

  if (typeof oOperacao != "undefined" && oper == "resultado") {
    oValor = Operacao(oOperacao, oValor, valor);
    document.calculadora.visor.value = oValor;
    delete oper;
    delete oValor;
    return 0;
  }

  if (typeof oValor != "undefined") {
    oValor = Operacao(oOperacao, oValor, valor);
    oOperacao = oper;
    document.calculadora.visor.value = oValor;
  } else {
    oValor = valor;
    oOperacao = oper;
  }
}
