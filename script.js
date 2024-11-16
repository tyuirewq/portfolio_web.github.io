// typing Animation
var typed = new Typed(".typing",{
    strings:["","Web Developer","Software developer","Java Programmer","Database Analyst"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
// Aside
// const nav = document.querySelector(".nav"),
//         navList = nav.querySelectorAll("li"),
//         totalNavList = navList.length;
//         for (let i = 0; i < totalNavList.length; i++) {
//             console.log(navList[i])
//         }

const currentYear = new Date().getFullYear();
const birthYear = 2001;
const age = currentYear - birthYear;
document.getElementById('mycurrent').innerText = age;
