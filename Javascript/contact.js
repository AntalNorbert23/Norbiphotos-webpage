function myFunction() {
    let x = document.getElementById("header");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }


function valideazaemail(id){
    
    let email=document.getElementById(id).value;
    let span=document.getElementById("eroare_email");

    if (!email.includes("@" && ".")){
        span.innerText="Adresa de email nu este validă!";
    } else{
        span.innerText="";
    }
};


function valideazal(id){
  
   const text=document.getElementById(id).value;
    const mincar=3;
    const maxcar=20;
    let error;
    if ( text.length<mincar){
       error=`Câmpul ${id} trebuie să aibă minim ${mincar} caractere.`;
     } else if(text.length>maxcar){
       error=`Câmpul ${id} trebuie să aibă maxim ${maxcar} caractere`;
        }

        const span=document.getElementById(`eroare_${id}`);
    if (error){
        span.innerText=error;
    } else{
        span.innerText="";
    }
};
    
const formular=document.querySelector("form");
formular.addEventListener("submit", function(event){
    event.preventDefault();

    valideazaemail("email");
    valideazal("nume")
    valideazal("prenume");
});
