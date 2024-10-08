//animation for navbar

document.addEventListener("DOMContentLoaded", function () {
  const contents = document.querySelectorAll(".nav");

  function handleScroll() {
    contents.forEach(content => {
      const rect = content.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        content.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});


//animation for hero

document.addEventListener("DOMContentLoaded", function () {
  const contents = document.querySelectorAll(".hero");

  function handleScroll() {
    contents.forEach(content => {
      const rect = content.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        content.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});



//animation for contact

document.addEventListener("DOMContentLoaded", function () {
  const contents = document.querySelectorAll(".contact");

  function handleScroll() {
    contents.forEach(content => {
      const rect = content.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        content.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});



//animation for services

document.addEventListener("DOMContentLoaded", function () {
  const contents = document.querySelectorAll(".servicess");

  function handleScroll() {
    contents.forEach(content => {
      const rect = content.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        content.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

//animation for sitems

document.addEventListener("DOMContentLoaded", function () {
  const contents = document.querySelectorAll(".items-section");

  function handleScroll() {
    contents.forEach(content => {
      const rect = content.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        content.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});


//animation for products section

document.addEventListener("DOMContentLoaded", function () {
  const contents = document.querySelectorAll(".container-pr");

  function handleScroll() {
    contents.forEach(content => {
      const rect = content.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        content.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});


//animation for about section

document.addEventListener("DOMContentLoaded", function () {
  const contents = document.querySelectorAll(".about");

  function handleScroll() {
    contents.forEach(content => {
      const rect = content.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        content.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

//smoth scroll

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });



// /*hero section after 786px*/
function updatedscreen (){
  let hero = document.querySelector(".hero");
if(window.innerWidth <= 786){
  hero.innerHTML = `
   <div class="hero-content">
   <img src="./public/images/heroimg.png" alt="Hero Image" class="hero-image">
    <h1>MONSTERA</h1>
    <span>Welcome to PlantsHub, where we showcase the beauty and diversity <br> of our planet's natural wonders, celebrate lush greenery, and explore <br> the incredible world of plants all in one place.</span>
    <button href="" class="btn">Discover Now &RightArrow;</button>
  </div>`;
  return;
// } else{
//   // hero.innerHTML='';
 }
}

updatedscreen();
window.addEventListener('resize',updatedscreen);



/*humburger side menu*/

let hamburger = document.getElementById("hamburger");
let cut = document.getElementById("cut-btn");
const sideMenu = document.querySelector(".side-menu");

hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("active"); // Toggle the active class to show/hide the menu
});

cut.addEventListener("click", () => {
  sideMenu.classList.toggle("active"); // Toggle the active class to hide the menu
});


function openSideMenu(){
  document.getElementById('side-menu').style.display = 'block';
}

function closeSideMenu(){
  document.getElementById('side-menu').style.display = 'none';
}




//product injected by json
let products = document.getElementById("product-grid");

const xhr = new XMLHttpRequest();
xhr.open("GET", "./products.json", true);

xhr.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    const data = JSON.parse(xhr.responseText);
    for (let i = 0; i < data.length; i++) {
      products.innerHTML += `
        <div class="product">
          <img alt="${data[i].name}" height="220" src="${data[i].image}" width="220">
          <p>${data[i].name}</p>
          <h3>${data[i].category}</h3>
          <div class="price">$${data[i].price}</div>
          <div class="shop-now">
            <a id="add-to-cart" class="add-to-cart">Add-To-Cart</a>
          </div>
        </div>
      `;
    }
  }
};

xhr.send();










// //theme switcher toggle

//   let toggle = document.getElementById("checkbox");
// toggle.addEventListener("change",() => {
//   if(toggle.checked){
//     document.body.style.backgroundColor = "black";
//     document.body.style.backgroundColor = "black";
//     document.body.style.backgroundColor = "black";
//   } else{
//     document.body.style.backgroundColor = "white";
//   }
// });