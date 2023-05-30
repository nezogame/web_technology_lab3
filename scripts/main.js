var images = [ 
      ["../source/raspberry.jpg",
      "../source/blueberry.jpg",
      "../source/strawberry.jpg"],
      ["../source/conifer.jpg",
      "../source/fern.jpg",
      "../source/needle.jpg"],
      ["../source/hyacinth.jpg",
      "../source/bulbs.jpg",
      "../source/tulips.jpg"
    ]
];

var imgesName = [
  "Ягоди",
  "Хвойні",
  "Цибулинні"
]

const prevButton = document.querySelector(".click_prev");
const nextButton = document.querySelector(".click_next");

var slideshowImage =  document.querySelector(".slideshow_image");
var catName = document.querySelector(".category_name");
var currentImage = 0;

function showImage() {
  catName.textContent = imgesName[currentImage];
  var imageElements = slideshowImage.querySelectorAll("img");
  images[currentImage].forEach((imageUrl, index) => {
    imageElements[index].src = imageUrl;
  });
}


function prevImage() {
    currentImage--;
    if (currentImage < 0) {
      currentImage = images.length - 1;
    }
    return showImage();
}

function nextImage() {
    currentImage++;
    if (currentImage >= images.length) {
      currentImage = 0;
    }
    return showImage();
}

// Initialize the slideshow with the first set of images
showImage();

// Add event listeners to the buttons
prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

// Start the slideshow timer
setInterval(nextImage, 5000);

const themeButton = document.querySelector(".button_theme");

function changeTheme(){
  var elements = document.querySelectorAll('*');
  var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.background = "GREY";
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = randomColor;
  }
}

themeButton.addEventListener("click", changeTheme);

// regestration

const closeButton = document.querySelector('.close_button');
const openButton = document.querySelector('.registration_button');

const closeLogButton = document.querySelector('.log_close_button');


const registrationPopup = document.querySelector('.reg_form');
const loginPopup = document.querySelector('.login_form');

const greating = document.querySelector(".greating");

function close() {
  registrationPopup.style.display = 'none';
}

function displayForm(){
  registrationPopup.style.display = "block";
}

closeButton.addEventListener('click', ()=>close());
closeLogButton.addEventListener('click', ()=>closeLogin());
openButton.addEventListener('click',()=>displayForm());




function FormValidation( e ){
  e.preventDefault();
  //alert(“Alert”)
  
  let name = document.getElementsByName("name")[0];
  let email = document.getElementsByName("email")[0];
  let phone = document.getElementById("phone");


  let regExpName = /^[a-zA-Z ]{2,30}$/;
  let regExpEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  let regExpPhono = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  //Name validation

  let flag=0;
    if (!name.value.match(regExpName) || name.value == "") {
      document.querySelector(".error_name").style.visibility = "visible";
      name.style.border = "1px solid #f00";
      
    }else {
      flag++;
      name.nextElementSibling.style.display = "hiden";
      name.style.border = "1px solid transparent";
    }
    //email validation
    if (!email.value.match(regExpEmail) || email.value == "") {
      console.log(email);
      document.querySelector(".error_email").style.visibility = "visible";
      email.style.border = "1px solid #f00";
    }
    else {
      flag++;
      email.nextElementSibling.style.display = "nhidenone";
      email.style.border = "1px solid transparent";
    }
    //phone no validation
    if (!phone.value.match( regExpPhono) || phone.value == "") {
      console.log(phone);
      document.querySelector(".error_phone").style.visibility = "visible";
      phone.style.border = "1px solid #f00";
    }
    else {
      flag++;
      phone.nextElementSibling.style.display = "hiden";
      phone.style.border = "1px solid transparent";
    }
    if(flag===3){
        localStorage.setItem("name",name.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("phone",phone.value);
        swapToLogin();
    }

}

function loginValidation( e ){
  e.preventDefault();
  //alert(“Alert”)
  let name = document.getElementsByName("login_name")[0];
  let email = document.getElementsByName("login_email")[0];
  //Name validation
  let flag=0;
    if (!(name.value===localStorage.getItem("name")) || name.value == "") {
      document.querySelector(".log_error_name").style.visibility = "visible";
      name.style.border = "1px solid #f00";

    }else {
      flag++;
      name.nextElementSibling.style.display = "hiden";
      name.style.border = "1px solid transparent";
    }
    //email validation
    if (!(email.value===localStorage.getItem("email")) || email.value == "") {
      console.log(email);
      document.querySelector(".log_error_email").style.visibility = "visible";
      email.style.border = "1px solid #f00";
    }
    else {
      flag++;
      email.nextElementSibling.style.display = "hiden";
      email.style.border = "1px solid transparent";
    }
    if(flag===2){
      localStorage.setItem("auth", true);
      closeLogin();
      const name = localStorage.getItem("name");
      greating.innerHTML = `Hi ${name}!`;
  }
}

function swapToLogin(){
    registrationPopup.style.display = 'none';
    loginPopup.style.display = "block";
}

function swapToRegistration(){
  loginPopup.style.display = 'none';
  registrationPopup.style.display = "block";
}

function closeLogin(){
  loginPopup.style.display = 'none';
}


const sinUpButton = document.querySelector(".submit");
sinUpButton.addEventListener("click",(e)=>FormValidation(e));

const loginButton = document.querySelector(".login_submit");
loginButton.addEventListener("click",(e)=>loginValidation(e));

const changeLogin = document.querySelector(".login");
changeLogin.addEventListener("click",()=>swapToLogin());


const changeSignOut = document.querySelector(".sign_in");
changeSignOut.addEventListener("click",()=>swapToRegistration());


const LogOut = document.querySelector(".log_out");
LogOut.addEventListener("click",()=>{localStorage.clear()});
