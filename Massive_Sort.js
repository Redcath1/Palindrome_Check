const students = [
  { id: 1, name: "John", mark: 5 },
  { id: 2, name: "Peter", mark: 4 },
  { id: 3, name: "Vincent", mark: 3 },
  { id: 4, name: "Sebastien", mark: 5 },
  { id: 5, name: "Alex", mark: 2 },
];
const poorsQuantity = students.filter((students) => students.mark === 2).length;
const fiversCount = students.some((students) => students.mark === 5);
const marksArray = students.map((students) => students.mark);
const sum = students.reduce(
  (acc, currentValue) => acc + currentValue.mark,
  0
);
const averageMark = sum / marksArray.length;
const isEver = marksArray.every((student) => students.mark === 2);
console.log("количество двоечников", poorsQuantity);
console.log("есть ли отличники", Count);
console.log("средняя оценка", averageMark);
console.log(isEver);
console.log('тест гита с накаченной нодой')
//Сколько двоечников? Есть ли отличники/двоечники? Средний балл? являются ли все двоечниками?
