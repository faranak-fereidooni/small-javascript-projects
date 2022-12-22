const buttons = document.querySelectorAll(".btn");
const containersBtn = document.querySelectorAll(".container-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    removeActiveClassButton();
    button.classList.add("active");
    const id = "container-" + button.id;

    containersBtn.forEach((containerBtn) => {
      id === containerBtn.id
        ? containerBtn.classList.add("display-block")
        : containerBtn.classList.remove("display-block");
    });
  });
});

function removeActiveClassButton() {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
}

// const buttons = document.querySelectorAll(".btn");
// const containerBtns = document.querySelectorAll(".container-btn");

// buttons.forEach((button)=>{
//     button.addEventListener("click",()=>{
//         removeActiveClass();
//     button.classList.add("active");
//     const id= "container-" + button.id;
//     containerBtns.forEach(containerBtn=>{
//         id === containerBtn.id ?
//         containerBtn.classList.add("display-block"):
//         containerBtn.classList.remove("display-block")

//     }) 
//     })
// })
// function removeActiveClass(){
//     buttons.forEach((button)=>{
//         button.classList.remove("active");
// })
// }