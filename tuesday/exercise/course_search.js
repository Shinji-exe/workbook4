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
    }
    ];

    let emptyArray = []

    
    for(let i = 0; i < courses.length; i++){
        if(courses[i].StartDate === "11/22/22"){
            emptyArray.push(courses[i])
console.log(courses[i].StartDate)
        }else{
console.log("Can't find it")
        }
    }

    console.log(emptyArray)

    console.log("----------------------")

    for(let x = 0; x<courses.length; x++){
        if(courses[x].Title === "Introduction to Angular"){
            console.log(courses[x].Title)
            emptyArray.push(courses[x].Title)
        }else{
            console.log("Not Found")
        }
    }

    console.log(emptyArray)

    console.log("----------------------")

    for(let y = 0; y < courses.length; y++){
        if(courses[y].Fee >= "50.00" ){
 console.log(courses[y].Title)
emptyArray.push(courses[y].Title)
        }
    }

    console.log(emptyArray)

    console.log("----------------------")

    for(let z = 0; z < courses.length; z++){
        if(courses[z].Location === "Classroom 1"){
console.log(courses[z].Title)
        }
    }