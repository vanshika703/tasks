let student1 = {
    name: "test1",
    age: 18,
    school: "srm",
    subjectList: ["Computer", "Maths", "English"],
    marks: [95, 95, 96],
    printDetails: () => {
        console.log("Name : " +student1.name + " Age : " +student1.age + " School : " +student1.school);
    }
}

let student2 = {
    name: "test2",
    age: 19,
    school: "srm",
    subjectList: ["Computer", "Maths", "English"],
    marks: [95, 90, 96],
    printDetails: () => {
        console.log("Name : " +student2.name + " Age : " +student2.age + " School : " +student2.school);
    }
}

let student3 = {
    name: "test3",
    age: 18,
    school: "srm",
    subjectList: ["Computer", "Maths", "English"],
    marks: [92, 95, 96],
    printDetails: () => {
        console.log("Name : " +student3.name + " Age : " +student3.age + " School : " +student3.school);
    }
}

let avg = (obj) =>{
    obj.printDetails();
    let avg = (obj.marks[0] + obj.marks[1] + obj.marks[2])/3
    console.log("Avg : " + avg)
}

avg(student1)
avg(student2)
avg(student3)