// const timeOfCall = () => {
//   let timeOfCall;
//   //   let nowTime = new Date();
//   return function getTime() {
//     if (timeOfCall == undefined) {

//       console.log('Enabled');
//       timeOfCall = new Date();
//     } else {
//       let nowTime = new Date();
//       //   let res = (nowTime.getTime() - timeOfCall.getTime()) / 1000;
//       let res = nowTime.getTime() - timeOfCall.getTime();
//       console.log(res + ' s');
//       timeOfCall = new Date();
//     }
//   };
// };
// const getTime = timeOfCall();
