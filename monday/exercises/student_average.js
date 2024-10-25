let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] },
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 96] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] },
];

// let all = students.length

for (let i = 0; i < students.length; i++) {
  let scores = students[i].scores;
  let totalGrades = 0;

  for (let x = 0; x < scores.length; x++) {
    totalGrades = totalGrades + scores[x];
  }
  let average = totalGrades / scores.length;
  console.log(`${students[i].name} ${average.toFixed(2)}`);
}

// console.log(totalGrades);

console.log("--------------------")

for(let i = 0; i < students.length; i++){
    let totalGrade = 0;

    for(let x = 0; x < students[i].scores.length; x++){
        totalGrade = totalGrade + students[i].scores[x];
    }
    let getTheAverage = totalGrade / students[i].scores.length
    console.log(getTheAverage)
}
