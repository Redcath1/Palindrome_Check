function triangle(sym, size) {
  let result = "";
  for (let i = 0; i < size; i++) {
    for (let x = 0; x <= i; x++) {
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
    for (let x = 0; x <= i; x++) {
      if (i === 0 || i === size - 1 || x === 0 || x === i) {
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
