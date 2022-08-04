import { employeeArr } from './employee.js';

console.log(employeeArr.sort((a, b) => (a.salary > b.salary ? 1 : -1)));
