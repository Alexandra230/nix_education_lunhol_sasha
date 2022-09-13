const addButton = document.getElementById('addbtn');
addButton.addEventListener('click', function () {
  let eventName = document.getElementById('eventName').value;
  let startTime = document.getElementById('start').value;
  let endTime = document.getElementById('end').value;
  console.log(checkName(eventName));
  console.log(checkTime(startTime, endTime));
  //   if (checkName(eventName) && checkTime(startTime, endTime)) {
  //     console.log(`Name: ${eventName}, start: ${startTime}, end: ${endTime}`);
  //   } else {
  //     console.log('goat');
  //}
});

function checkName(name) {
  return /^[a-zA-Z]+$/.test(name);
}
function checkTime(start, end) {
  let fromHH = start.split(':').splice(0, 1);
  let fromMM = start.split(':').splice(1, 1);
  let toHH = end.split(':').splice(0, 1);
  let toMM = end.split(':').splice(1, 1);
  if (fromHH < toHH) {
    return true;
  } else if (fromHH == toHH) {
    if (fromMM < toMM) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// let dat = new Date();
// let hh = dat.setHours(11, 22);
// console.log(dat.getHours(), dat.getMinutes());
