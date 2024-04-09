// const number = document.getElementById("number");
// const increase = document.getElementById("increase");
// const decrease = document.getElementById("decrease");

// increase.onclick = () => {
//   console.log("increase 가 클릭됨");
// };

// decrease.onclick = () => {
//   console.log("decrease 가 클릭됨");
// };

const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};