const students = [
  { id: 1, name: "John", mark: 5 },
  { id: 2, name: "Peter", mark: 4 },
  { id: 3, name: "Vincent", mark: 3 },
  { id: 4, name: "Sebastien", mark: 5},
  { id: 5, name: "Alex", mark: 2 },
];
const poorsQuantity = students.filter((students) => students.mark === 2).length;
const fiversCount = students.some((students) => students.mark === 5);
const marksArray = students.map((students) => students.mark);
const sum = students.reduce((acc, currentValue) => acc + currentValue.mark, 0);
const averageMark = sum / marksArray.length;
const isEver = students.every((students) => students.mark === 2);
function allHaveMark(students, mark) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].mark !== 2) {
      return false;
    }
  }
  return true;
}
console.log("количество двоечников", poorsQuantity);
console.log("есть ли отличники", fiversCount);
console.log("средняя оценка", averageMark);
console.log("проверка с every", isEver);
console.log("Все ли двоечники через цикл", allHaveMark(students, 2));
//Сколько двоечников? Есть ли отличники/двоечники? Средний балл? являются ли все двоечниками?
//двоечники через цикл
