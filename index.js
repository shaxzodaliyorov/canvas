// const canvas = document.querySelector("canvas");

// let ctx = canvas.getContext("2d");
// let width = 20
// window.addEventListener("load", (e) => {
//   canvas.width = canvas.offsetWidth;
//   canvas.height = canvas.offsetHeight;
// });

// const StartDrow = () => {
//   isdrow = true;
//   ctx.beginPath();
//   ctx.closePath();
// };

// const drow = (e) => {
//   if (isdrow) {
//     ctx.lineTo(e.offsetX, e.offsetY);
//     ctx.stroke();
//     ctx.lineWidth = 20
//   }
// };

const box = document.querySelector(".box");
let isdrow = false;

const StartDrow = () => {
  isdrow = true;
};

const drow = (e) => {
  if (isdrow) {
    console.log(e);
    let x = e.pageX;
    let y = e.pageY;
    box.style.left = x + "px";
    box.style.top = y + "px";
  }
};

const stopDrow = () => {
  isdrow = false;
};

box.addEventListener("mousemove", drow);
box.addEventListener("mousedown", StartDrow);
box.addEventListener("mouseup", stopDrow);
