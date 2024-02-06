

if(localStorage.getItem("password")===null){
  $(".imgdiv").css("display","none");
  $("#bod").css({"display":"flex","justify-content":"center","align-items":"center"})
  $("#errortext").css("display","block");
  setTimeout(()=>window.location.href="Acasa.html",4000);
}else{
  console.log("the website key exists");
  setTimeout(()=>console.log("hello") ,3000) ;
  setTimeout(()=>localStorage.removeItem('password'),1000);// just for demonstration
}


function myFunction() {
    let x = document.getElementById("header");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }


 