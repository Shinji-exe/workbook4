"use strict"

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

//tomato
for(let i = 0; i < courses.length; i++){
    const course = courses[i]
    console.log(course)
}

//tomato
for (const course of courses) {
  console.log(course);
}

console.log("----------------------");

// function courseOne(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].StartDate === "11/22/22"){
//             return arr[i]
//         }
//     }
// }

// let showDate = courseOne(courses);
// console.log(showDate)

for (let i = 0; i < courses.length; i++) {
  if (courses[i].CourseId === "PROG200") {
    console.log("The PROG course starts: " + courses[i].StartDate);
  }
}

//OR

for (const course of courses) {
  if (course.CourseId === "PROG200") {
    console.log("The PROG course starts: " + courses.StartDate);
  }
}

console.log("----------------------");

for (let x = 0; x < courses.length; x++) {
  if (courses[x].CourseId === "PROJ500") {
    console.log("The title is: " + courses[x].Title);
  }
}

console.log("----------------------");

let under50CourseTitles = [];

for (let y = 0; y < courses.length; y++) {
  if (Number(courses[y].Fee <= 50.00)) {
    // console.log(courses[y].Title);
    under50CourseTitles.push(courses[y].Title);
  }
}

console.log(under50CourseTitles);

console.log("----------------------");

let classesInClassroom1 = [];

for (let z = 0; z < courses.length; z++) {
  let course = courses[z];
  if (course.Location === "Classroom 1") {
    console.log("Classes come: " + course.Title);
    classesInClassroom1.push(course.Title + " " + course.CourseId);
  }
}

console.log(classesInClassroom1);
