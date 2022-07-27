const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let pack = (consumptionPerWeek * weeksAmount) / sheetsInReamPaper;
for (let i = 0; i < pack + 1; i++) {
  if (i > pack && i < pack + 1) {
    console.log(i);
  } else if (i == pack) {
    console.log(i);
  }
}
