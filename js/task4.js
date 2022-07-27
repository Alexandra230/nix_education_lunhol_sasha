const roomsOnFloor = 3;
const floors = 9;
const roomNumber = Math.round(100 + Math.random() * (999 - 100));

function house(room) {
  console.log(`Room: ${room}`);
  let porch = room / (floors * roomsOnFloor);
  console.log(porch);
  for (let i = 0; i < porch + 1; i++) {
    if (i > porch && i < porch + 1) {
      console.log(`Porch: ${i}`);
    } else if (i == porch) {
      console.log(`Porch: ${i}`);
    }
  }
  let minporch = String(porch).slice(0, 2);
  let flat = roomNumber - minporch * roomsOnFloor * floors;
  if (flat > 0) {
    console.log(`Flat number: ${flat}`);
  } else {
    console.log(`Flat number: 1`);
  }

  let floor = flat / roomsOnFloor;
  if (floor == 0) {
    console.log(`Floor: 1`);
  }
  for (let i = 0; i < floor + 1; i++) {
    if (i > floor && i < floor + 1) {
      console.log(`Floor: ${i}`);
    } else if (i == floor) {
      console.log(`Floor: ${i}`);
    }
  }
}
house(roomNumber);
