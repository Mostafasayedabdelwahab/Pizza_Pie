	// Navbar
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  let h = document.querySelector('header');
  let home = document.querySelector(".home");
  let img = document.querySelector(".home-img img");
  var x = window.matchMedia("(max-width: 668px)");
   
  menu.onclick = () => {
      navbar.classList.toggle('active');
  }
   
  window.onscroll = () => {
      navbar.classList.remove('active');

      if (document.body.classList.contains("active")) {
        h.style.backgroundColor = "#1e1c2a";
      } else {
        h.style.backgroundColor = "#fff";
        if (window.scrollY == 0) {
          h.style.backgroundColor = "#ffffff30";
        }
      }
   
  }
  // Dark Mode
  let darkmode = document.querySelector('#darkmode');
   
  darkmode.onclick = () => {
      if(darkmode.classList.contains('bx-moon')){
          darkmode.classList.replace('bx-moon','bx-sun');
          document.body.classList.add('active');
          h.style.backgroundColor = "#1e1c2a";
          home.style.backgroundImage = "none";
          if (x.matches) {
            img.setAttribute("src", "image/pizza-4968645_1280.jpg");
          }
      }else{
          darkmode.classList.replace('bx-sun','bx-moon');
          document.body.classList.remove('active');
          h.style.backgroundColor = "#ffffff50";
          if (x.matches) {
          home.style.backgroundImage = "url('image/pizza-4968645_1280.jpg')";
          }else{
              home.style.backgroundImage = "url('image/m4.jpg')";
          }
      }
  }
   
  // Scroll Reveal
  const sr = ScrollReveal ({
      origin: 'left',
      distance: '40px',
      duration: 2000,
      reset: true
  });
   
   
  sr.reveal(`.home-text, .home-img,
              .about-img, .about-text,
              .box, .s-box,
              .btn, .connect-text,
              .contact-box`, {
      interval: 100
  })