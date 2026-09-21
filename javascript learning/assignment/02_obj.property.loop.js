// Object Property Loop
// Loop through the marks object using for...in to print each subject and score, then calculate the average and print which subjects scored above average.

let student = { 
    name: "Aarav",  
    age: 16,  
    city: "Pune",  
    marks: { math: 85, science: 90, english: 78, history: 65, computer: 95 } 
};

// let marks = (student.marks)
// // console.log(marks)
// // console.log(marks.math)

// let total = 0;
// let iteration = 0;

// for(i in marks){
//     // console.log(i)
//     // console.log(marks[i])
    
//     total  =+ marks[i];
//     console.log(`subject = ${i} , marks = ${marks[i]}`)
//     iteration++;
// }

// console.log(`total is ${total}`)
// console.log(`iteration is ${iteration}`)

// let avg = total/iteration


// console.log(`average is ${avg}`)
// console.log("subjects scored above average.")


// for(i in marks){
//     // console.log(i)
//     // console.log(marks[i])
    
//     if(marks[i]>avg){
//         console.log(`subject = ${i} , marks = ${marks[i]}`)
//     }
// }

let total2 =0;
let count = 0;
let aboveAvg = [];
for(let subject in student.marks ){
    // console.log(student.marks[subject]);
    total2 = total2 + student.marks[subject];
    count ++;
}
let Avg2 = total2 / count ;

for(let subject in student.marks ){
    if( student.marks[subject] >Avg2){
        aboveAvg.push(subject)
    }
}
console.log('Average Score : ', Avg2)
console.log('Above Average Subjects are :', aboveAvg)