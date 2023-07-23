$('.carousel-1').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      nav:true,
    },
      800:{
          items:2,
          nav:true
      },
      1000:{
          items:3,
          nav:false
      },
      1400:{
          items:4,
          nav:true,
      }
  }
})


$('.carousel-2').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      nav:true,
    },
      1000:{
          items:2,
          nav:true
      },
      1400:{
          items:3,
          nav:true,
      }
  }
})


$('.carousel-3').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      nav:true,
    },
      1000:{
          items:2,
          nav:true
      },
      1400:{
          items:3,
          nav:true,
      }
  }
})


const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add('loading-none');
}, loadingDuration);




const body = document.body;
const modeToggle = document.querySelector(".switch");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});



let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}









