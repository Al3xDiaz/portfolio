export function validarInput(input) {
  let valor = input.value.trim();
  if (!validEmail(input)) {
    return '';
  } else if (valor === '') {
    input.classList.add("is-invalid");
    return '';
  } else {
    input.classList.remove("is-invalid");
    return valor;
  }
}

function validEmail(element) {
  let valores = element.value.split("@");
  let clase = false;
  element.classList.forEach(function(item, i) {
    clase = clase ? true : item === 'email' || item === 'Email';
  });
  if (clase) {
    if (valores.length === 2) {
      element.classList.remove("is-invalid");
      return true;
    } else {
      element.classList.add("is-invalid");
      return false;
    }
  } else {
    return true;
  }
}
export function getIntRandom(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export default validarInput;
