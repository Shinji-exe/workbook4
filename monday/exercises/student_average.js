let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] },
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 96] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] },
];

// let all = students.length
let totalGrades = 0;
for (let i = 0; i < students.length; i++) {
  let scores = students[i].scores;

  for (let x = 0; x < scores.length; x++) {
    // console.log(students[i].name, students[i].scores[x])
    totalGrades = totalGrades + scores[x];
  }
  let averages = totalGrades / scores.length;
  console.log(`${students[i].name} ${averages.toFixed(2)}`);
}

console.log(totalGrades);
