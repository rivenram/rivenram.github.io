// Script to create the horizontal scroll 
const container = document.querySelector('.container');

container.addEventListener('wheel', (e)=> {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
    // scrollLine.style.width = container.scrollLeft / 2 + 'px';
})

/* Script for the clickable pop-up button */
let modal = document.getElementById("modalDialog");
/* Adding event listener for the pop-up button, click to show and to close */
let showModalButton = document.getElementById("showModal");
showModalButton.addEventListener("click", () => {
  modal.showModal();
});
let closeModalButton = document.getElementById("closeModal");
closeModalButton.addEventListener("click", () => {
  modal.close();
});

// Same script as above but for the other content pages 
let modal2 = document.getElementById("modalDialog2");
let showModalButton2 = document.getElementById("showModal2");
showModalButton2.addEventListener("click", () => {
  modal2.showModal();
  console.log("never");
});
let closeModalButton2 = document.getElementById("closeModal2");
closeModalButton2.addEventListener("click", () => {
  modal2.close();
});

let modal3 = document.getElementById("modalDialog3");
let showModalButton3 = document.getElementById("showModal3");
showModalButton3.addEventListener("click", () => {
  modal3.showModal();
  console.log("gonna");
});
let closeModalButton3 = document.getElementById("closeModal3");
closeModalButton3.addEventListener("click", () => {
  modal3.close();
});

let modal4 = document.getElementById("modalDialog4");
let showModalButton4 = document.getElementById("showModal4");
showModalButton4.addEventListener("click", () => {
  modal4.showModal();
  console.log("give");
});
let closeModalButton4 = document.getElementById("closeModal4");
closeModalButton4.addEventListener("click", () => {
  modal4.close();
});

let modal5 = document.getElementById("modalDialog5");
let showModalButton5 = document.getElementById("showModal5");
showModalButton5.addEventListener("click", () => {
  modal5.showModal();
  console.log("you");
});
let closeModalButton5 = document.getElementById("closeModal5");
closeModalButton5.addEventListener("click", () => {
  modal5.close();
});

let modal6 = document.getElementById("modalDialog6");
let showModalButton6 = document.getElementById("showModal6");
showModalButton6.addEventListener("click", () => {
  modal6.showModal();
  console.log("up");
});
let closeModalButton6 = document.getElementById("closeModal6");
closeModalButton6.addEventListener("click", () => {
  modal6.close();
});

// Same script as above, but for the tram footer
let chara = document.getElementById("charaDialog");
let showCharaButton = document.getElementById("showChara");
showCharaButton.addEventListener("click", () => {
  chara.showModal();
});
let closeCharaButton = document.getElementById("closeChara");
closeCharaButton.addEventListener("click", () => {
  chara.close();
});

// Script to make the button on repeating page work 
// God it is tedious to do this 1 by 1 haha 

let modal7 = document.getElementById("modalDialog7");
let showModalButton7 = document.getElementById("showModal7");
showModalButton7.addEventListener("click", () => {
  modal7.showModal();
  console.log("gonna");
});
let closeModalButton7 = document.getElementById("closeModal7");
closeModalButton7.addEventListener("click", () => {
  modal7.close();
});

let modal8 = document.getElementById("modalDialog8");
let showModalButton8 = document.getElementById("showModal8");
showModalButton8.addEventListener("click", () => {
  modal8.showModal();
  console.log("give");
});
let closeModalButton8 = document.getElementById("closeModal8");
closeModalButton8.addEventListener("click", () => {
  modal8.close();
});

let modal9 = document.getElementById("modalDialog9");
let showModalButton9 = document.getElementById("showModal9");
showModalButton9.addEventListener("click", () => {
  modal9.showModal();
  console.log("you");
});
let closeModalButton9 = document.getElementById("closeModal9");
closeModalButton9.addEventListener("click", () => {
  modal9.close();
});

let modal10 = document.getElementById("modalDialog10");
let showModalButton10 = document.getElementById("showModal10");
showModalButton10.addEventListener("click", () => {
  modal10.showModal();
  console.log("up");
});
let closeModalButton10 = document.getElementById("closeModal10");
closeModalButton10.addEventListener("click", () => {
  modal10.close();
});

let modal11 = document.getElementById("modalDialog11");
let showModalButton11 = document.getElementById("showModal11");
showModalButton11.addEventListener("click", () => {
  modal11.showModal();
  console.log("you");
});
let closeModalButton11 = document.getElementById("closeModal11");
closeModalButton11.addEventListener("click", () => {
  modal11.close();
});

let modal12 = document.getElementById("modalDialog12");
let showModalButton12 = document.getElementById("showModal12");
showModalButton12.addEventListener("click", () => {
  modal12.showModal();
  console.log("up");
});
let closeModalButton12 = document.getElementById("closeModal12");
closeModalButton12.addEventListener("click", () => {
  modal12.close();
});