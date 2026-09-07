// Nested Object Retrieval — Company Structure

// Print every department -> team -> members (3 levels of nested looping)
// Print all team leads across the whole company. 
// Calculate total employees and total budget.
// Find which team has the most members.

let company = {
    name: "TechCorp",

    departments: {
        engineering: {
            budget: 80000,
            teams: {
                frontend: { members: ["Alice", "Bob"],lead: "Alice"},
                backend: { members: ["Charlie", "Dave", "Eve"],lead: "Dave"}
            }},

        sales: {
            budget: 30000,
            teams: {
                domestic: {members: ["Frank"],lead: "Frank"},
                international: {members: ["Grace", "Heidi"],lead: "Grace"}
            }},

        hr: {
            budget: 15000,
            teams: {
                recruitment: {members: ["Ivan"],lead: "Ivan"}
            }}
    }
};


// console.log(company.departments.engineering);







// for (let i = 0 ; i<length; i++){

//     for (let j = 0 ; j<length; j++){
        
//         for (let k = 0 ; k<length; k++){
    
//         }
    
//     }

// }

















// console.log(company.departments)
// console.log(company.departments.engineering.teams)
// console.log(company.departments.engineering.teams.frontend.members)
// console.log(company.departments.engineering.teams.backend.members)

// let depart = []
// // console.log(company.departments[i])
// for(departments in company.departments){
//     // console.log(departments)
//     depart.push(departments)

// }
// console.log(depart.length)

// for (let i=0; i<=depart.length; i++){

// }










