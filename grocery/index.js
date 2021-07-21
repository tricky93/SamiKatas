const employees = [
{name: "Sami", age: 31},
 {name: "Paddy", age: 28},
 {name: "Ehsan", age: 17}, 
 {name: "Robin", age: 22},
 {name: "Charli", age: 16}
]


function EligibleEmployeeList(requiredAge) {
	const filteredList = []
	for(let i = 0; i < employees.length; i++){
		if (employees[i].age >= requiredAge) {
			filteredList.push(employees[i])
		}
	}
	return filteredList;
	//return employees.filter(e => e.age >= requiredAge)
  }
  module.exports = {EligibleEmployeeList};