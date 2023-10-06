// Write your solution in this file!
const employee = {
    name: "Maddie",
    streetAddress: "558 Broome St.",
};

function updateEmployeeWithKeyAndValue(employee,key,value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
};

const maddieInfo = updateEmployeeWithKeyAndValue(
    employee,
     "streetAddress",
      "521 E 14th");

console.log(employee.streetAddress);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
    return obj;
  };

const newEmployee1 = destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","Sarah",);

function deleteFromEmployeeByKey(employee,key) {
    const newEmployee1 = {...employee};
    delete newEmployee1.name;
    return newEmployee1;
};

function destructivelyDeleteFromEmployeeByKey(employee) {
    delete employee.name;
    return employee;
};

