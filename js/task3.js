const namesOfDays = {
  ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', ' Пятница', 'Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};

function getNameOfDay(obj) {
  const lang = 'ru';
  const day = 3;
  keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] == lang) {
      let arr = obj[keys[i]];
      for (let i = 0; i <= arr.length - 1; i++) {
        if (i == day - 1) {
          console.log(arr[i]);
        }
      }
    }
  }
}
getNameOfDay(namesOfDays);
