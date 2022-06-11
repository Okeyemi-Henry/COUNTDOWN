const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const rainySeason= '28 jul 2022';

countdown=()=> {
const rainySeasonDate = new Date(rainySeason)
const currentDate = new Date();

const totalseconds = Math.floor(rainySeasonDate - currentDate) / 1000;

const days = Math.floor(totalseconds / 3600 / 24);
const hours = Math.floor( totalseconds/3600) %24;
const mins = Math.floor(totalseconds / 60)% 60;
const seconds = Math.floor(totalseconds)%60;


daysEl.innerHTML = days;
hoursEl.innerHTML = hours;
minsEl.innerHTML = mins;
secondsEl.innerHTML = seconds;
setInterval(countdown, 1000);

}

//initial call
countdown();
/*
function ourFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


function myFunction(x) {
    x.classList.toggle("change");
  }

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click" ,() => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  }
  
  
  
  
  )
*/

const mainMenu = document.querySelector('.nav-menu')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
  mainMenu.style.display = 'flex'
  mainMenu.style.top = '0';
  
}

function close(){
  mainMenu.style.top = '-100%'
}

let henry = "Okeyemi";
console.log(henry)


