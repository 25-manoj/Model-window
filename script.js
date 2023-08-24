//global vriables //

let clickMe = document.querySelectorAll(".show-modal");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let closeModel = document.querySelector(".close-modal");

//window showing function //

let modelWindow = () => {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};
// hiding function
let hideWindow = () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

for (let i = 0; i < clickMe.length; i++) {
  clickMe[i].addEventListener("click", modelWindow);
  closeModel.addEventListener("click", hideWindow);
  overlay.addEventListener("click", hideWindow);
}
