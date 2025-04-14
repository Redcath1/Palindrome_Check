const students = [
  { id: 1, name: "John", mark: 5 },
  { id: 2, name: "Peter", mark: 4 },
  { id: 3, name: "Vincent", mark: 3 },
  { id: 4, name: "Sebastien", mark: 5 },
  { id: 5, name: "Alex", mark: 2 },
];
const poorsQuantity = students.filter((students) => students.mark === 2).length;
const fivers = students.some((students) => students.mark === 5);
const massiveMarks = students.map((students) => students.mark);
const sum = massiveMarks.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
const averageMark = sum / massiveMarks.length;

console.log("количество двоечников", poorsQuantity);
console.log("есть ли отличники", fivers);
console.log("средняя оценка", averageMark);

//Сколько двоечников? Есть ли отличники/двоечники? Средний балл?
