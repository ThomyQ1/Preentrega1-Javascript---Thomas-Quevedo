let sigamosCalculando = true;

while (sigamosCalculando) {
  let num1 = parseFloat(prompt("ingrese el primer numero por favor"));
  let operador = prompt("ingrese el operador a realizar(+,-,*,/):");
  let num2 = parseFloat(prompt("ingrese el segundo numero por favor"));

  let resultado;

  if (operador === "+") {
    resultado = num1 + num2;
  } else if (operador === "-") {
    resultado = num1 - num2;
  } else if (operador === "*") {
    resultado = num1 * num2;
  } else if (operador === "/") {
    if (num2 !== 0) {
      resultado = num1 / num2;
    } else {
      resultado = "Todo numero dividido por cero es cero";
    }
  } else {
    resultado = "Operador inválido";
  }

  alert("El resultado es: " + resultado);

  sigamosCalculando = confirm("¿Necesitas hacer algun otro calculo?");
}

alert("Que tengas un buen dia");
