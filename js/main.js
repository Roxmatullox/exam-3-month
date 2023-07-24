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










(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 5px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




