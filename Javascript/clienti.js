function myFunction() {
    let x = document.getElementById("header");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }

const modal = document.getElementById("modal"); 
const modal2 = document.getElementById("modal2"); 

// opens/closes with X

function openModal() {
    modal.style.display = "block";
  }
  function closeModal() {
    modal.style.display = "none";
  }
  function openModal2() {
    modal2.style.display = "block";
  }
  function closeModal2() {
    modal2.style.display = "none";
  }

//closes with the help of clicking on the modal which is the whole screen except the div
window.onclick = function(event) {
 switch(event.target.id){
  case"modal":
    if (event.target == modal) {
        modal.style.display = "none";
    }
break;
case"modal2":
    if (event.target == modal2) {
      modal2.style.display = "none";
     
  }
  break;
  default:
    break;
}}


//closes with the help of ESC
document.addEventListener("keydown",function(event){
    let name=event.key;

   switch(event.target.id){
      case"click1":
        if(name==="Escape"){
            modal.style.display="none";
        }
      break;
      case"click2":
        if(name==="Escape"){
            modal2.style.display="none";
        }
      break;
      default:
      break;
  }})

//verify password +login click

  function login (event) {
    const passwordcl1="client1";// should be stored in backend..
    const password1=String(document.getElementById("password").value); 

    event.preventDefault();
   

    if(password1===passwordcl1){
      
       window.location.href="Client1.html"; 
       localStorage.setItem("password", "client1");
       error="";
    }
   else{
        error="Parola gresita";
    }
    const span=document.getElementById("passincorr");
    if(error){
        span.innerText=error;
    }
    else{
        span.innerText="";
    }
};

function login2 (event) {
  const passwordcl2="client2";// should be stored in backend..
  const password2=String(document.getElementById("password2").value); 

  event.preventDefault();
 

  if(password2===passwordcl2){
    
     window.location.href="Client2.html"; 
     localStorage.setItem("password", "client2");
     error="";
  }
 else{
      error="Parola gresita";
  }
  const span=document.getElementById("passincorr2");
  if(error){
      span.innerText=error;
  }
  else{
      span.innerText="";
  }
};

//verify password+ login with ENTER
document.addEventListener("keydown",function(event){
  const passwordcl1="client1";
  const password1=String(document.getElementById("password").value); 
  const passwordcl2="client2";
  const password2=String(document.getElementById("password2").value); 
  let name=event.key;
  switch (event.target.id){
    case"password":
  if(name==="Enter"){
    if(password1===passwordcl1){
      
      window.location.href="Client1.html"; 
      localStorage.setItem("password", "client1");
      error="";
      
   }
  else{
       error="Parola gresita";
   }
   const span=document.getElementById("passincorr");
   if(error){
       span.innerText=error;
   }
   else{
       span.innerText="";
   }}

    break;
   case"password2":
   let name2=event.key;
  if(name2==="Enter"){
    if(password2===passwordcl2){
      
      window.location.href="Client2.html"; 
      localStorage.setItem("password", "client2");
      error="";
   }
  else{
       error="Parola gresita";
   }
   const span=document.getElementById("passincorr2");
   if(error){
       span.innerText=error;
   }
   else{
       span.innerText="";
   }
   
   }
    break;
    default:
    break;
  }
   
   
   
});

//show password

let showpass=document.getElementById("checkbox1");
let showpass2=document.getElementById("checkbox2");
document.addEventListener("click",function(){
  if ( showpass.checked || showpass2.checked) {
     document.getElementById("password").type = "text";
     document.getElementById("password2").type= "text"
  } else {
     document.getElementById("password").type = "password";
     document.getElementById("password2").type = "password";
  }
});


