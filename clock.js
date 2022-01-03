(function () {
  const clock = document.getElementById("clock");
  setInterval(() => {
    clock.innerText = new Date().toLocaleTimeString();
  });
})();

// function myDigitalClock() {
//   const clock = document.getElementById("clock");
//   var currentDate = new Date();

//   var h = currentDate.getHours();
//   var m = currentDate.getMinutes();
//   var s = currentDate.getSeconds();

//   m = m < 10 ? `0${m}` : m;
//   s = s < 10 ? `0${s}` : s;

//   clock.innerText = `${h} : ${m}: ${s}`;
//   setTimeout(myDigitalClock, 1000);
// }
// myDigitalClock();
