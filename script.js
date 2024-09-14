// const show = document.querySelector(".icon-1")
// const hide = document.querySelector(".icon-2")
// const navbar = document.querySelector(".nav-res")

// show.addEventListener("click",()=>{
//     navbar.style.display = "block"
// })

// hide.addEventListener("click",()=>{
//     navbar.style.display = "none"
// })

// // function showNav(){
// //     console.log('hello')
// // }
// SHREERADHEY
// var menu = document.getElementById("nav-res");
// var button = document.getElementById("icon-1");
// var isOpen = false;

// button.addEventListener("click", function() {
//   if (isOpen) {
//     menu.style.display = "none";
//     isOpen = false;
//   } else {
//     menu.style.display = "block";
//     isOpen = true;
// }
// });

// var menu = document.getElementById("nav-res");
// var button = document.getElementById("icon-1");

// button.addEventListener("click", function() {
//   menu.classList.toggle("show");
// // });

// const bar = document.querySelector(".bar");
//       const cross = document.querySelector(".cross");
//       const a = document.querySelectorAll("nr");
//       bar.addEventListener("click", () => {
//         cross.style.display = "block";
//         bar.style.display = "block";
//         nr.forEach((as) => {
//           as.style.display = "block";
//         });
//       });
//       cross.addEventListener("click", () => {
//         cross.style.display = "none";
//         nr.forEach((as) => {
//           as.style.display = "none";
//         });
//       });
// const toggleBtn = document.querySelector('.toggle-btn')
// const toggleBtnicon = document.querySelector('.toggle-btn i')
// const dropDownMenu= document.querySelector('.drop-downb')
// const navb = document.querySelector('.navb')
// const dropDown = document.querySelector('.open')
// function navBar(){
//   dropDown.style.backgroundColor = 'brown'
// }
function toggleMenu() {
    var menu = document.getElementById("menuak");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}