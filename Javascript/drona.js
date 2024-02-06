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
        if(slideIndex==5 || slideIndex==6 || slideIndex==7 || slideIndex==8||
            slideIndex==13 || slideIndex==14 ||slideIndex==15 || slideIndex==16){
    
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