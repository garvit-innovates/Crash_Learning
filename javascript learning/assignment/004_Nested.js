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
                frontend: {
                    members: ["Alice", "Bob"],
                    lead: "Alice"
                },
                backend: {
                    members: ["Charlie", "Dave", "Eve"],
                    lead: "Dave"
                }
            }
        },

        sales: {
            budget: 30000,
            teams: {
                domestic: {
                    members: ["Frank"],
                    lead: "Frank"
                },
                international: {
                    members: ["Grace", "Heidi"],
                    lead: "Grace"
                }
            }
        },

        hr: {
            budget: 15000,
            teams: {
                recruitment: {
                    members: ["Ivan"],
                    lead: "Ivan"
                }
            }
        }
    }
};


// 1. Print every department → team → member

for (let [departmentName, department] of Object.entries(company.departments)) {

    console.log("Department:", departmentName);

    for (let [teamName, team] of Object.entries(department.teams)) {

        console.log("  Team:", teamName);

        for (let member of team.members) {
            console.log("    Member:", member);
        }
    }
}


// 2. Print all team leads

console.log("Team Leads:");

for (let department of Object.values(company.departments)) {

    for (let team of Object.values(department.teams)) {

        console.log(team.lead);
    }
}


// 3. Calculate total employees and total budget

let totalEmployees = 0;
let totalBudget = 0;

for (let department of Object.values(company.departments)) {

    totalBudget += department.budget;

    for (let team of Object.values(department.teams)) {

        totalEmployees += team.members.length;
    }
}

console.log("Total Employees:", totalEmployees);
console.log("Total Budget:", totalBudget);


// 4. Find team with the most members

let maxMembers = 0;
let largestTeam = "";

for (let department of Object.values(company.departments)) {

    for (let [teamName, team] of Object.entries(department.teams)) {

        if (team.members.length > maxMembers) {

            maxMembers = team.members.length;
            largestTeam = teamName;
        }
    }
}

console.log("Team with most members:", largestTeam);
console.log("Members:", maxMembers);