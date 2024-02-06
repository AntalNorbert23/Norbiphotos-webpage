function myFunction() {
    let x = document.getElementById("header");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }



  function openModal() {
    document.getElementById("Modal").style.display = "block";
  }
  let modalk= document.getElementById("Modal");
  
  function closeModal() {
    modalk.style.display = "none";
  }

  
 let slideIndex = 1;
  
  function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let modal= document.getElementById("modal-content");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "grid";
        if(slideIndex==1 || slideIndex==2 || slideIndex==3 || slideIndex==4||
            slideIndex==9 || slideIndex==10 ||slideIndex==11 || slideIndex==12||
            slideIndex==17 || slideIndex==18 ||slideIndex==19 || slideIndex==20){
    
          $(modal).addClass('vertical');
          $(modal).removeClass('horizontal');
      }else {
        $(modal).removeClass('vertical');
        $(modal).addClass('horizontal');
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
    modalk.style.display="none";
  }
    else if(name==="ArrowLeft"){
       plusSlides(-1);
   }  
   else if (name==="ArrowRight"){
       plusSlides(+1);
   }
})