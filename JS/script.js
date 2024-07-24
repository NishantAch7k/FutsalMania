document.addEventListener('DOMContentLoaded', function() {
    // Initialize the sidenav
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    // Initialize the slider
    var sliderElems = document.querySelectorAll('.slider');
    M.Slider.init(sliderElems, {
      indicators: true,
      height: 600,
      duration: 500,
      interval: 3000
    });

    // Initialize the datepicker
    var dateElems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(dateElems, {
      autoClose: true,
      format: 'yyyy-mm-dd'
    });

    // Initialize the carousel
    var carouselElems = document.querySelectorAll('.carousel');
    M.Carousel.init(carouselElems);

   
  });


  //sidenav 

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
  });

  navLinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      link.addEventListener('click', () => {
          navLinks.forEach(otherLink => otherLink.querySelector('a').classList.remove('active'));
          link.querySelector('a').classList.add('active');
          if (window.innerWidth <= 768) {
              nav.classList.remove('nav-active');
              burger.classList.remove('toggle');
          }
      });
  });




  


 //testimonial
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true
    });

    // Optional: Auto-play the carousel
    setInterval(function() {
      instances[0].next();
    }, 5000); // Change slide every 5 seconds
  });

  //gallery
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.gallery-carousel');
    var instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true
    });

    // Auto play
    setInterval(function() {
      instances[0].next();
    }, 5000); // Change slide every 5 seconds
  });



  //news updates and cta 

  document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();

    const form = document.getElementById('newsletter-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        if (email) {
            console.log('Submitted email:', email);
            M.toast({html: 'Thank you for subscribing!', classes: 'rounded'});
            form.reset();
        }
    });

    // Read More functionality
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.card');
            const extendedContent = card.querySelector('.extended-content');
            if (extendedContent.style.display === 'none' || extendedContent.style.display === '') {
                extendedContent.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                extendedContent.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });
});

//news updates and cta ends  //




  //   Initialize the modal
      document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.modal');
          var instances = M.Modal.init(elems);
      });


      
      document.addEventListener('DOMContentLoaded', function() {
          const serviceCards = document.querySelectorAll('.service-card');

          serviceCards.forEach(card => {
              card.addEventListener('mouseenter', function() {
                  this.style.transform = 'translateY(-15px) rotate(2deg)';
              });

              card.addEventListener('mouseleave', function() {
                  this.style.transform = 'translateY(0) rotate(0)';
              });
          });
      });


      document.addEventListener('DOMContentLoaded', function() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
        // Intersection Observer for fade-in effect
        const fadeElems = document.querySelectorAll('.service-card, .banner-service, .split-service, .icon-service-item');
        
        const fadeIn = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        };
    
        const fadeObserver = new IntersectionObserver(fadeIn, {
            root: null,
            threshold: 0.1
        });
    
        fadeElems.forEach(elem => {
            elem.classList.add('fade-out');
            fadeObserver.observe(elem);
        });
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
        // Intersection Observer for fade-in effect
        const fadeElems = document.querySelectorAll('.service-card, .banner-service, .split-service, .icon-service-item, .gallery-grid img, .about-us-section');
        
        const fadeIn = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        };
    
        const fadeObserver = new IntersectionObserver(fadeIn, {
            root: null,
            threshold: 0.1
        });
    
        fadeElems.forEach(elem => {
            elem.classList.add('fade-out');
            fadeObserver.observe(elem);
        });
    });


    document.addEventListener('DOMContentLoaded', function() {
        // Initialize sidenav
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    
        // Initialize collapsible (FAQ section)
        var collapsibleElems = document.querySelectorAll('.collapsible');
        var collapsibleInstances = M.Collapsible.init(collapsibleElems);
    
        // Animate service cards on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__fadeInUp');
                }
            });
        }, { threshold: 0.1 });
    
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card) => {
            observer.observe(card);
        });
    
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
        // Animated counter for membership plans
        function animateCounter(el) {
            const target = parseInt(el.getAttribute('data-target'));
            let count = 0;
            const increment = target / 100;
            
            const updateCount = () => {
                count += increment;
                if (count < target) {
                    el.innerText = '$' + Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    el.innerText = '$' + target;
                }
            };
            
            updateCount();
        }
    
        const counterElements = document.querySelectorAll('.plan-card h4');
        counterElements.forEach(animateCounter);
    
        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const hero = document.querySelector('.hero');
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
        });
    });
    
 
  