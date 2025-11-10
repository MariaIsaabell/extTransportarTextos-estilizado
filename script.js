/* Programa - Modelo 1 */

window.document.addEventListener("DOMContentLoaded", function () {
  /* Botão Letra Maiúscula */
  window.document
    .getElementById("btnMaiuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result").innerHTML = inputText.toUpperCase();
    });
  /* Botão Letra Maiúscula */
  window.document
    .getElementById("btnMinuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result").innerHTML = inputText.toLowerCase();
    });

   window.document
    .getElementById("btnPrimeiraLetraMaiuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value.toLowerCase()
      let resultado = inputText.replaceAll(/(^[a-zA-Z]|[.]\s*[a-zA-Z])/g, ponto => ponto.toUpperCase());
      document.querySelector("#result").innerHTML = resultado;
    });

  window.document
    .getElementById("btnLimpar")
    .addEventListener("click", function () {
      document.querySelector("#input-text").value = " ";
      document.querySelector("#result").innerHTML = " ";
    });

  window.document
    .getElementById("btnNegrito")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      let resultado = `<strong>${inputText}</strong>`;
      document.querySelector("#result").innerHTML = resultado;
    });
});
