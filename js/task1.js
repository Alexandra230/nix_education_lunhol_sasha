import { studentArr } from './studentArr.js';
class Student {
  static #id = 1;
  static listOfStudents = [];
  static isSelfPayment;
  constructor(enrollee) {
    this.id = Student.#id++;
    this.name = enrollee.name;
    this.surname = enrollee.surname;
    this.ratingPoint = enrollee.ratingPoint;
    this.schoolPoint = enrollee.schoolPoint;
    this.course = enrollee.course;
    this.isSelfPayment = !(this.ratingPoint >= 800);
    Student.listOfStudents.push(this);
  }
  static isOnBudget() {
    Student.listOfStudents.sort((a, b) => {
      if (a.ratingPoint > b.ratingPoint) {
        return -1;
      }
      if (a.ratingPoint < b.ratingPoint) {
        return 1;
      }
      if (a.ratingPoint == b.ratingPoint) {
        if (a.schoolPoint < b.schoolPoint) {
          return 1;
        } else {
          return -1;
        }
      }
    });

    let res = this.listOfStudents.slice(0, 5);

    return res;
  }
}
console.log(Student.listOfStudents);

new Student({
  name: 'Инна',
  surname: 'Скакунова',
  ratingPoint: 1560,
  schoolPoint: 200,
  course: 2,
});
new Student({
  name: 'Татьяна',
  surname: 'Коваленко',
  ratingPoint: 880,
  schoolPoint: 700,
  course: 1,
});

new Student({
  name: 'Сергей',
  surname: 'Войлов',
  ratingPoint: 1000,
  schoolPoint: 1100,
  course: 2,
});

new Student({
  name: 'Анна',
  surname: 'Кугир',
  ratingPoint: 1430,
  schoolPoint: 1200,
  course: 3,
});
new Student({
  name: 'Станислав',
  surname: 'Щелоков',
  ratingPoint: 1130,
  schoolPoint: 1060,
  course: 2,
});
new Student({
  name: 'Денис',
  surname: 'Хрущ',
  ratingPoint: 1000,
  schoolPoint: 1090,
  course: 4,
});
new Student({
  name: 'Татьяна',
  surname: 'Капустник',
  ratingPoint: 650,
  schoolPoint: 500,
  course: 3,
});
new Student({
  name: 'Максим',
  surname: 'Меженский',
  ratingPoint: 990,
  schoolPoint: 1100,
  course: 1,
});
new Student({
  name: 'Денис',
  surname: 'Марченко',
  ratingPoint: 570,
  schoolPoint: 1300,
  course: 4,
});
new Student({
  name: 'Антон',
  surname: 'Завадский',
  ratingPoint: 1090,
  schoolPoint: 1010,
  course: 3,
});
new Student({
  name: 'Игорь',
  surname: 'Куштым',
  ratingPoint: 870,
  schoolPoint: 790,
  course: 1,
});
console.log(Student.listOfStudents);
console.log(Student.isOnBudget());
