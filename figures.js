function triangle(sym, size) {
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
