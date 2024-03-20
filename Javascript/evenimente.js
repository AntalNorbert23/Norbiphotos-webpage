const header = document.getElementById("header");
const modal = document.getElementById("Modal");
const slides = document.getElementsByClassName("slides");
const modalContent = document.getElementById("modal-content");

let slideIndex = 1;

function toggleMenu() {
  header.classList.toggle("responsive");
}

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}


  
  function showSlides(n) {
 
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "grid";
    if ([5, 6, 7, 8, 13, 14, 15, 16, 17, 18, 19, 20, 29, 30, 31, 32, 37, 38, 39, 40].includes(slideIndex)) {
      modalContent.classList.add("vertical");
      modalContent.classList.remove("horizontal");
    } else {
      modalContent.classList.remove("vertical");
      modalContent.classList.add("horizontal");
    }
  }
    
    showSlides(slideIndex);
  
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

  document.addEventListener("keydown",function(event){
    let name=event.key;
    if(name==="Escape"){
    modal.style.display="none";
  }
    else if(name==="ArrowLeft"){
       plusSlides(-1);
   }  
   else if (name==="ArrowRight"){
       plusSlides(+1);
   }
})