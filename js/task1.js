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
}
let p1 = new Person(employeeArr[3]);
console.log(p1);
