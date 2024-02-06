function myFunction() {
    let x = document.getElementById("header");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }

let pic1=document.getElementById('i1');
let pic2=document.getElementById('i2');
let pic17=document.getElementById('i17');
let pic18=document.getElementById('i18');
let pic19=document.getElementById('i19');
let pic20=document.getElementById('i20');

if ($(window).width() < 475){
	pic1.src="Acasa/i1.jpg";
	pic2.src="Acasa/i2.jpg";
	pic17.src="Acasa/i17.jpg";
	pic18.src="Acasa/i18.jpg";
	pic19.src="Acasa/i19.jpg";
	pic20.src="Acasa/i20.jpg";
}

  let $slides, interval, $selectors,currentIndex, nextIndex;

let cycle = index => {
	let $currentSlide, $nextSlide, $currentSelector, $nextSelector;

	if (index !== undefined) {
		nextIndex=index;
	} else {
		nextIndex=nextIndex;
	}

		
	$currentSlide = $($slides.get(currentIndex));
	$currentSelector = $($selectors.get(currentIndex));

	$nextSlide = $($slides.get(nextIndex));
	$nextSelector = $($selectors.get(nextIndex));

	$currentSlide.removeClass("active");
	$nextSlide.addClass("active");

	$currentSelector.removeClass("current");
	$nextSelector.addClass("current");


	if (index !== undefined) {
		currentIndex=nextIndex;
	} else {
		if (currentIndex < $slides.length - 1) {
			currentIndex=currentIndex + 1;
		} else {
			currentIndex=0;
		}
	}
	
	if (currentIndex + 1 < $slides.length) {
		nextIndex=currentIndex +1;
	} else {
		nextIndex=0;
	}
	//REVERSE SLIDESHOW
	/*nextIndex=9;
			if (index !== undefined) {
				currentIndex=nextIndex;
			} else {
				if (currentIndex == 0) {
					currentIndex=nextIndex ;
				} else {
					currentIndex=currentIndex-1;
				}
			}
			
			if (nextIndex!==0) {
				nextIndex=currentIndex - 1;
			} else {
				nextIndex=9;
			}*/
	
};

$(() => {
	currentIndex = 0;
	nextIndex = 1;

	$slides = $(".slide");
	$selectors = $(".selector");

	$slides.first().addClass("active");
	$selectors.first().addClass("current");

	interval = window.setInterval(cycle, 6000);

	$selectors.on("click", event => {
		let target = $selectors.index(event.target);
		if (target !== currentIndex) {
			window.clearInterval(interval);
			cycle(target);
			interval = window.setInterval(cycle, 6000);
		}
	});

	/*$(window).on("keydown", event=>{
		let name=event.key;
		console.log(name);
		if(name=="ArrowRight"){
			$currentSlide = $($slides.get(currentIndex));
			$currentSelector = $($selectors.get(currentIndex));
		
			$nextSlide = $($slides.get(nextIndex));
			$nextSelector = $($selectors.get(nextIndex));
		
			$currentSlide.removeClass("active");
			$nextSlide.addClass("active");
		
			$currentSelector.removeClass("current");
			$nextSelector.addClass("current");
			
			window.clearInterval(interval);
			cycle();
			interval = window.setInterval(cycle, 6000);
		}
		
		else if(name=="ArrowLeft"){
			
			$currentSlide = $($slides.get(currentIndex));
			$currentSelector = $($selectors.get(currentIndex));
		
			$nextSlide = $($slides.get(nextIndex));
			$nextSelector = $($selectors.get(nextIndex));
		
			$currentSlide.addClass("active");
			$nextSlide.removeClass("active");
		
			$currentSelector.addClass("current");
			$nextSelector.removeClass("current");
			
			window.clearInterval(interval);
			cycle();
			interval = window.setInterval(cycle, 6000);
		}
	})*/
});


