const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const value = document.querySelector("#value");

let count = 0;

function renderCount() {
  value.innerHTML = count;
}
function updateCount(by = 0) {
  const newValue = count + by;
  if (newValue < 0) {
    return;
  }
  count = newValue;
}

minusButton.addEventListener("click", () => {
  updateCount(-1);
  renderCount();
});

plusButton.addEventListener("click", () => {
  updateCount(+1);
  renderCount();
});
