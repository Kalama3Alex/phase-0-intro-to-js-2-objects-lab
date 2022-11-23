// Write your solution in this file!
let employee = {
    name:"Alex",
    streetAddress:"1937",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    var newObj = {...employee};
    newObj = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const clone = {...employee}
    delete clone[key];
    return clone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
