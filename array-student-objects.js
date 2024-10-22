let students = [
    {first: "Gurgot", hairColor: "black"},
    {first: "Tim", hairColor: "black"},
    {first: "Yuri", hairColor: "black"},
    {first: "Mehek", hairColor: "black"},
    {first: "Tiffany", hairColor: "black"}
]

for(let i = 0; i < students.length; i++){
    const student = students[i]
    console.log(student.first, student.hairColor)
}