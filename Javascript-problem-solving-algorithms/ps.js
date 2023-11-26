const findElement = (array, element) =>
  array.findIndex((pop) => pop === element);

let array = [19, 20, true, "Koos", 29, false, "Jannie", "Mary"];

const container = document.querySelector(".container");
let n = 1;
let p = "";

array.map((element) => {
  const pippie = document.createElement("p");
  p = `p${n}`;
  pippie.setAttribute("id", p);
  pippie.innerHTML = `The element [ ${element} ] is found in the array at index ${findElement(
    array,
    element
  )}`;
  container.appendChild(pippie);
});
