import { employeeArr } from './employee.js';
class Person {
  constructor({ id, name, surname, salary, workExp, isPrivileges, gender }) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.workExp = workExp;
    this.isPrivileges = isPrivileges;
    this.gender = gender;
  }
  getFullName() {
    return this.name + ' ' + this.surname;
  }
}
let createEmployeesFromArr = (arr) => {
  return arr.map((empl) => new Person(empl));
};
const employeeConstructArr = createEmployeesFromArr(employeeArr);

const getFullNamesFromArr = (arr) => {
  return arr.map((empl) => empl.getFullName());
};

console.log(getFullNamesFromArr(employeeConstructArr));
