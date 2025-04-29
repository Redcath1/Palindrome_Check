/*function triangle(sym, size) {
  let result = "";
  for (let i = 0; i < size; i++) {
    for (let k = 0; k <= i; k++) {
      result += sym;
    }
    result += "\n";
  }
  return result;
}
// пустой внутри треугольник
function triangle(sym, size) {
  let result = "";
  for (let i = 0; i < size; i++) {
    for (let k = 0; k <= i; k++) {
      if (i === 0 || i === size - 1 || k === 0 || k === i) {
        result += sym;
      } else {
        result += " ";
      }
    }
    result += "\n";
  }
  return result;
}
console.log(triangle("*", 5));

//пустой внутри равнобедренный треугольник
function triangle(sym, size) {
  let result = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      result += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      if (i === 0 || i === size - 1 || k === 0 || k === 2 * i) {
        result += sym;
      } else {
        result += " ";
      }
    }
    result += "\n";
  }
  return result;
}

console.log(triangle("*", 5));
*/
//оптимизированная версия

function triangle(sym, size) {
  let result = "";
  const center = size - 1;
  for (let i = 0; i < size; i++) {
    const left = center - i;
    const right = center + i;
    for (let k = 0; k <= right; k++) {
      result += k === left || k === right || i === size - 1 ? sym : " ";
    }
    result += "\n";
  }
  return result;
}
console.log(triangle("#", 5));
