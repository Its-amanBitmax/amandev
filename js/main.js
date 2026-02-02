(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  // console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						// console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

})(jQuery);



$(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});

async function loadAboutData() {
	try {
		const res = await fetch("https://portfolio-48mo.onrender.com/api/about");
		const result = await res.json();

		if (!result.success || !result.data.length) return;

		const about = result.data[0];

		document.getElementById("aboutName").innerText = about.name;
		document.getElementById("aboutDescription").innerText = about.description;
		document.getElementById("aboutEmail").innerText = about.email;
		document.getElementById("aboutPhone").innerText = about.phone;
		document.getElementById("aboutAddress").innerText = about.address;
		document.getElementById("aboutZip").innerText = about.zipcode;

		// Update footer contact info
		document.getElementById("footerAddress").innerText = about.address;
		document.getElementById("footerPhone").innerText = about.phone;
		document.getElementById("footerEmail").innerText = about.email;

		document.getElementById("aboutDob").innerText =
			new Date(about.dob).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

		document.getElementById("aboutImage").style.backgroundImage =
			`url('${about.image}')`;

		// Interests
		const interestContainer = document.getElementById("interestContainer");
		interestContainer.innerHTML = "";

		// Define icons for different interests
		const interestIcons = {
			'Coding': 'flaticon-web-programming',
			'Gaming': 'flaticon-video-player',
			'Self Growing': 'flaticon-suitcase',
			'Learning new things': 'flaticon-listening'
		};

		about.interest.forEach(interestString => {
			// Split the comma-separated string into individual interests
			const interests = interestString.split(',').map(item => item.trim());

			interests.forEach(interest => {
				const iconClass = interestIcons[interest] || 'flaticon-listening'; // Default icon
				interestContainer.innerHTML += `
					<div class="interest-wrap d-flex align-items-center mr-3">
						<div class="icon d-flex align-items-center justify-content-center">
							<span class="${iconClass}"></span>
						</div>
						<div class="text">${interest}</div>
					</div>
				`;
			});
		});

	} catch (err) {
		// console.error("About load error:", err);
	}
}

loadAboutData();


$(document).ready(function () {

  async function loadBannerImages() {
    // console.log("Loading banner images...");
    try {
      const res = await fetch("https://portfolio-48mo.onrender.com/api/banner");
      const result = await res.json();
      // console.log("Banner API response:", result);

      let images = [];
      if (result.success && result.data.length) {
        images = result.data.map(item => {
          // If image URL is relative, prepend the API base URL
          if (item.image.startsWith('/')) {
            return 'https://portfolio-48mo.onrender.com' + item.image;
          }
          // Ensure https for absolute URLs
          if (item.image.startsWith('https://')) {
            return item.image.replace('https://', 'https://');
          }
          return item.image;
        });
      } else {
        // Fallback to default images if API fails or no data
        images = ['images/bg_1.jpg', 'images/bg_2.jpg'];
      }
      

      const slides = document.querySelectorAll(".slider-bg");

      slides.forEach((slide, index) => {
        const imgUrl = images[index] || images[0]; // fallback to first image
        slide.style.backgroundImage = `url('${imgUrl}')`;
        slide.style.backgroundSize = "cover";
        slide.style.backgroundPosition = "center";
        slide.style.backgroundRepeat = "no-repeat";
      });

      // Refresh the carousel after setting images
      $('.home-slider').trigger('refresh.owl.carousel');

    } catch (err) {
      // console.error("Banner API error:", err);
      // Fallback to default images on error
      const defaultImages = ['images/bg_1.jpg', 'images/bg_2.jpg'];
      const slides = document.querySelectorAll(".slider-bg");
      slides.forEach((slide, index) => {
        const imgUrl = defaultImages[index] || defaultImages[0];
        slide.style.backgroundImage = `url('${imgUrl}')`;
        slide.style.backgroundSize = "cover";
        slide.style.backgroundPosition = "center";
        slide.style.backgroundRepeat = "no-repeat";
      });
      $('.home-slider').trigger('refresh.owl.carousel');
    }
  }

  // Load banner images after owl carousel is initialized
  $('.home-slider').on('initialized.owl.carousel', loadBannerImages);

  // Also call directly in case the event already fired
  loadBannerImages();

});

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("https://portfolio-48mo.onrender.com/api/service");
    const result = await res.json();

    // console.log("SERVICES API:", result);

    if (!result.success) return;

    const container = document.getElementById("servicesContainer");
    if (!container) {
      // console.error("❌ servicesContainer not found");
      return;
    }

    result.data.forEach(service => {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-3 mb-4";

      col.innerHTML = `
     <div
  style="
    background:#ffffff;
    border-radius:16px;
    overflow:hidden;
    box-shadow:0 10px 28px rgba(0,0,0,0.08);
    transition:all 0.35s ease;
    max-height:260px;
    cursor:pointer;
  "
  onmouseover="
    this.style.maxHeight='800px';
    this.querySelector('.service-desc').style.webkitLineClamp='unset';
  "
  onmouseout="
    this.style.maxHeight='260px';
    this.querySelector('.service-desc').style.webkitLineClamp='2';
  "
>

  <!-- IMAGE (HALF SECTION, CONTAIN) -->
  <div
    style="
      height:130px;
      width:100%;
      display:flex;
      align-items:center;
      justify-content:center;
      background:#f9fafb;
    "
  >
    <img
      src="${service.image}"
      alt="${service.title}"
      style="
        width:100%;
        height:100%;
        object-fit:contain;
        padding:14px;
      "
    />
  </div>

  <!-- TEXT -->
  <div style="padding:18px 20px;">
    <h3
      style="
        font-size:18px;
        font-weight:600;
        color:#111827;
        margin-bottom:8px;
      "
    >
      ${service.title}
    </h3>

    <p
      class="service-desc"
      style="
        font-size:14px;
        line-height:1.6;
        color:#6b7280;
        margin:0;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        overflow:hidden;
        transition:all 0.3s ease;
      "
    >
      ${service.description}
    </p>
  </div>

</div>

      `;

      container.appendChild(col);
    });

    // Load footer services
    const footerServicesContainer = document.getElementById("footerServices");
    if (footerServicesContainer) {
      footerServicesContainer.innerHTML = "";
      result.data.forEach(service => {
        footerServicesContainer.innerHTML += `
          <li><a href="#"><span class="fa fa-chevron-right mr-2"></span>${service.title}</a></li>
        `;
      });
    }

  } catch (err) {
    // console.error("❌ Service render error:", err);
  }

  // Load skills from API
  try {
    const res = await fetch("https://portfolio-48mo.onrender.com/api/skills");
    const result = await res.json();

    // console.log("SKILLS API:", result);

    if (!result.success) return;

    const skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) {
      // console.error("❌ skillsContainer not found");
      return;
    }

    skillsContainer.innerHTML = ""; // Clear existing static skills

    result.data.forEach(skill => {
      const item = document.createElement("div");
      item.className = "item";

      item.innerHTML = `
       <div 
  style="
    background:#ffffff;
    border-radius:16px;
    padding:30px 20px;
    text-align:center;
    box-shadow:0 10px 30px rgba(0,0,0,0.08);
    transition:all 0.35s ease;
    cursor:pointer;
    height:100%;
  "
  onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 18px 45px rgba(0,0,0,0.15)'"
  onmouseout="this.style.transform='none'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.08)'"
>

  <img
    src="${skill.image}"
    alt="${skill.title}"
    style="
      width:80px;
      height:80px;
      border-radius:50%;
      object-fit:cover;
      display:block;
      margin:0 auto 16px;
    "
  />

  <h2
    style="
      font-size:18px;
      font-weight:600;
      color:#1f2937;
      text-transform:capitalize;
      margin:0;
    "
  >
    ${skill.title}
  </h2>

</div>

      `;

      skillsContainer.appendChild(item);
    });

    // Initialize Owl Carousel for skills
    $('#skillsContainer').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 0,
      autoplaySpeed: 2000,
      autoplayHoverPause: false,
      margin: 20,
      nav: true,
      navText: ["<span class='ion-ios-arrow-back'>", "<span class='ion-ios-arrow-forward'>"],
      dots: false,
      smartSpeed: 800,
      fluidSpeed: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    });

    // Reinitialize progress bars after dynamic loading
    $(".progress").each(function() {
      var value = $(this).attr('data-value');
      var left = $(this).find('.progress-left .progress-bar');
      var right = $(this).find('.progress-right .progress-bar');

      if (value > 0) {
        if (value <= 50) {
          right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
        } else {
          right.css('transform', 'rotate(180deg)')
          left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
        }
      }
    });

  } catch (err) {
    // console.error("❌ Skills render error:", err);
  }

  // Load projects from API
  try {
    const projectsRes = await fetch("https://portfolio-48mo.onrender.com/api/projects");
    const projectsResult = await projectsRes.json();
    // console.log("PROJECTS API:", projectsResult);

    if (!projectsResult.success) return;

    const projectsContainer = document.getElementById("projectContainer");
    if (!projectsContainer) {
      // console.error("❌ projectContainer not found");
      return;
    }

    projectsContainer.innerHTML = ""; // Clear existing content

    projectsResult.data.forEach(project => {
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4";

      // Ensure https for image URL
      let imageUrl = project.image;
      if (imageUrl.startsWith('https://')) {
        imageUrl = imageUrl.replace('https://', 'https://');
      }

      col.innerHTML = `
     <div
  style="
    position:relative;
    width:100%;
    height:300px;
    border-radius:18px;
    overflow:hidden;
    background-image:url('${imageUrl}');
    background-size:cover;
    background-position:center;
    box-shadow:0 12px 35px rgba(0,0,0,0.18);
    transition:all 0.45s ease;
    cursor:pointer;
  "
  onmouseover="
    this.style.height='380px';
    this.querySelector('.project-text').style.opacity='1';
  "
  onmouseout="
    this.style.height='300px';
    this.querySelector('.project-text').style.opacity='1';
  "
>

  <!-- Overlay -->
  <div
    style="
      position:absolute;
      inset:0;
      border-radius:18px;
      background:linear-gradient(
        to top,
        rgba(0,0,0,0.85),
        rgba(0,0,0,0.3)
      );
      z-index:1;
    "
  ></div>

  <!-- TEXT -->
  <div
    class="project-text"
    style="
      position:absolute;
      bottom:20px;
      left:0;
      right:0;
      z-index:2;
      text-align:center;
      padding:0 16px;
      color:#ffffff;
      transition:all 0.4s ease;
    "
  >
    <h3 style="font-size:22px;font-weight:600;margin-bottom:10px;">
      <a
        href='${project.link}'
        target='_blank'
        style='color:#ffffff;text-decoration:none;'
      >
        ${project.title}
      </a>
    </h3>

    <!-- Tech Stack -->
    <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:8px;">
      ${project.techstack
        .map(
          tech => `
          <span
            style="
              font-size:12px;
              padding:6px 12px;
              border-radius:14px;
              background:rgba(255,255,255,0.18);
              color:#ffffff;
              white-space:nowrap;
            "
          >
            ${tech}
          </span>
        `
        )
        .join("")}
    </div>
  </div>

</div>

      `;

      projectsContainer.appendChild(col);
    });

  } catch (err) {
    // console.error("❌ Projects render error:", err);
  }
});





document.addEventListener("DOMContentLoaded", () => {

  const apiUrl = "https://portfolio-48mo.onrender.com/api/projects";
  const container = document.getElementById("projectContainer");

  fetch(apiUrl)
    .then(response => {
      // console.log("Raw Response:", response);

      if (!response.ok) {
        throw new Error("https error! Status: " + response.status);
      }

      return response.json();
    })
    .then(result => {
      // console.log("Full API Result:", result);

      if (!result.success) {
        // console.warn("API success=false");
        return;
      }

      if (!container) {
        // console.error("projectContainer not found in DOM");
        return;
      }

      container.innerHTML = ""; // clear old content

      result.data.forEach((project, index) => {
        // console.log(`Project ${index + 1}:`, project);

        container.innerHTML += `
          <div class="col-md-3 mb-4">
            <div class="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                 style="background-image: url('${project.image}');">
              
              <div class="overlay"></div>

              <div class="text text-center p-4">
                <h3>
                  <a href="${project.link}" target="_blank" rel="noopener">
                    ${project.title}
                  </a>
                </h3>
                <span>${project.techstack?.join(", ") || "N/A"}</span>
              </div>

            </div>
          </div>
        `;
      });
    })
    .catch(error => {
      // console.error("API / Fetch Error:", error);
    });

});

document.addEventListener("DOMContentLoaded", () => {

  const apiUrl = "https://portfolio-48mo.onrender.com/api/Testimonials";
  const container = document.getElementById("testimonialContainer");

  if (!container) return; // Exit if container doesn't exist on this page

  // 🔴 hide initially (flash fix)
  container.style.display = "none";

  fetch(apiUrl)
    .then(res => res.json())
    .then(result => {
      if (!result.success) return;

      container.innerHTML = "";

      result.data.forEach(item => {
        container.innerHTML += `
          <div class="item">
            <div class="testimony-wrap p-4 shadow">

              <p class="mb-2">"${item.description}"</p>

              <div class="d-flex align-items-center mt-4">
                <div
                  style="
                    background-image:url('${item.image}');
                    width:80px;
                    height:80px;
                    border-radius:50%;
                    background-size:cover;
                    background-position:center;
                    margin-right:15px;
                  "
                ></div>

                <div>
                  <p class="mb-0"><strong>${item.name}</strong></p>
                  <span>${item.title}</span>
                </div>
              </div>

            </div>
          </div>
        `;
      });

      // ✅ IMPORTANT: init AFTER data render
      $(".carousel-testimony").owlCarousel({
        center: true,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dots: false,
        nav: false,
        smartSpeed: 800,
        responsive: {
          0: { items: 1 },
          768: { items: 1 },
          1024: { items: 1 }
        }
      });

      // show after init
      container.style.display = "block";
    })
    // .catch(err => console.error(err));
});
  


document.addEventListener("DOMContentLoaded", () => {

  const apiUrl = "https://portfolio-48mo.onrender.com/api/blogs"; // 👈 confirm endpoint
  const container = document.getElementById("blogContainer");
  // console.log("Blog container found:", container);

  // Load blogs from API only
  fetch(apiUrl)
    .then(response => {
      // console.log("Blog Raw Response:", response);

      if (!response.ok) {
        throw new Error("https Error: " + response.status);
      }

      return response.json();
    })
    .then(result => {
      // console.log("Blog Full Result:", result);

      if (result.success && result.data && result.data.length > 0) {
        loadBlogs(result.data);
      } else {
        // console.warn("No blogs available from API");
        container.innerHTML = "<p>No blogs available at the moment.</p>";
      }
    })
    .catch(error => {
      // console.error("Blog API Error:", error);
      container.innerHTML = "<p>Unable to load blogs. Please try again later.</p>";
    });

  function loadBlogs(blogs) {
    if (!container) {
      // console.error("blogContainer not found");
      return;
    }

    container.innerHTML = "";

    blogs.forEach((blog, index) => {
      // console.log(`Loading Blog ${index + 1}:`, blog);

      const date = new Date(blog.createdAt).toDateString();

      // Ensure https for image URL if from API
      let imageUrl = blog.image;
      if (imageUrl && imageUrl.startsWith('https://')) {
        imageUrl = imageUrl.replace('https://', 'https://');
      }

      container.innerHTML += `
       <div class="col-md-3 d-flex">
  <div
    class="blog-entry"
    style="
      background:#ffffff;
      border-radius:16px;
      overflow:hidden;
      box-shadow:0 10px 28px rgba(0,0,0,0.08);
      transition:all 0.35s ease;
      width:100%;
      cursor:pointer;
    "
    onmouseover="
      this.style.transform='translateY(-6px)';
      this.style.boxShadow='0 18px 45px rgba(0,0,0,0.15)';
    "
    onmouseout="
      this.style.transform='translateY(0)';
      this.style.boxShadow='0 10px 28px rgba(0,0,0,0.08)';
    "
  >

    <!-- IMAGE -->
    <a
      href="blog.html?id=${blog._id}"
      style="
        display:block;
        width:100%;
        height:180px;
        background-image:url('${imageUrl}');
        background-size:cover;
        background-position:center;
        text-decoration:none;
      "
    ></a>

    <!-- CONTENT -->
    <div style="padding:18px 18px 20px; color:#374151;">

      <!-- META -->
      <div
        style="
          font-size:12px;
          color:#6b7280;
          margin-bottom:10px;
          display:flex;
          flex-wrap:wrap;
          gap:10px;
        "
      >
        <span>${date}</span>
        <span>${blog.category}</span>
        <span>💬 ${blog.tags?.length || 0}</span>
      </div>

      <!-- TITLE -->
      <h3
        style="
          font-size:16px;
          font-weight:600;
          margin-bottom:8px;
          line-height:1.4;
        "
      >
        <a
          href="blog.html?id=${blog._id}"
          style="color:#111827;text-decoration:none;"
        >
          ${blog.subject}
        </a>
      </h3>

      <!-- DESCRIPTION -->
      <p
        style="
          font-size:14px;
          line-height:1.6;
          color:#6b7280;
          margin:0;
          display:-webkit-box;
          -webkit-line-clamp:3;
          -webkit-box-orient:vertical;
          overflow:hidden;
        "
      >
        ${blog.description}
      </p>

    </div>

  </div>
</div>

      `;
    });

    // console.log("Blog container innerHTML after append:", container.innerHTML);

    // Force blog section to be visible
    const blogSection = document.getElementById('blog-section');
    if (blogSection) {
      blogSection.style.display = 'block';
      blogSection.style.visibility = 'visible';
      blogSection.style.opacity = '1';
    }
  }

});


document.addEventListener("DOMContentLoaded", () => {
  // console.log("Contact info script loaded");

  const apiUrl = "https://portfolio-48mo.onrender.com/api/contactinfo"; // 👈 confirm endpoint
  const container = document.getElementById("contactInfoContainer");
  // console.log("Contact info container found:", container);
  fetch(apiUrl)
    .then(response => {
      // console.log("Contact Raw Response:", response);

      if (!response.ok) {
        throw new Error("https Error: " + response.status);
      }

      return response.json();
    })
    .then(result => {
      // console.log("Contact Full Result:", result);

      if (!result.success) {
        // console.warn("Contact API success=false");
        return;
      }

      if (!container) {
        // console.error("contactInfoContainer not found");
        return;
      }

      container.innerHTML = "";
      const socialContainer = document.getElementById("footerSocialLinks");
      // console.log("Social container found:", socialContainer);
      socialContainer.innerHTML = "";

      result.data.forEach((item, index) => {
        // console.log(`Contact Item ${index + 1}:`, item);
        // Add to contact info section
        container.innerHTML += `
          <div class="dbox w-100 d-flex mb-3">
            <div class="icon d-flex align-items-center justify-content-center">
              <img src="${item.image}" alt="${item.title}"
                   style="width:100%; height:100%; object-fit:cover; border-radius:50%;">
            </div>
            <div class="text">
              <p>
                <span>${item.title}:</span>
                <a href="${item.link}">${item.description}</a>
              </p>
            </div>
          </div>
        `;

        // Add all contact info items as clickable images with title below to footer social links
        const socialLinkHTML = `
<li
  style="
    display:inline-flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    margin-right:22px;
    list-style:none;
    box-shadow:none !important;
    filter:none !important;
  "
>
  <a
    href="${item.link}"
    target="_blank"
    style="
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:flex-start;
      text-decoration:none;
      color:#9ca3af;
      font-size:12px;
      box-shadow:none !important;
      filter:none !important;
    "
    onmouseover="this.style.color='#ffffff'"
    onmouseout="this.style.color='#9ca3af'"
  >

    <!-- ICON (TOP) -->
    <div
      style="
        width:44px;
        height:44px;
        border-radius:50%;
        background:#ffffff;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-bottom:8px;
        box-shadow:none !important;
        filter:none !important;
      "
    >
      <img
        src="${item.image}"
        alt="${item.title}"
        style="
          width:22px;
          height:22px;
          object-fit:contain;
          box-shadow:none !important;
          filter:none !important;
        "
      />
    </div>

    <!-- TEXT (BOTTOM – FIXED) -->
    <span
      style="
        display:block;
        font-size:12px;
        line-height:1.2;
        text-align:center;
        margin-top:2px;
      "
    >
     
    </span>

  </a>
</li>

        `;
        socialContainer.innerHTML += socialLinkHTML;
        // console.log("Added social link HTML:", socialLinkHTML);
        // console.log("Social container innerHTML now:", socialContainer.innerHTML);
      });

      // console.log("Social container after adding links:", socialContainer.innerHTML);
    })
    .catch(error => {
      // console.error("Contact API Error:", error);
    });

});


function pingServer() {
  fetch("https://portfolio-48mo.onrender.com/api/test")
    .then(response => response.json())
    .then(data => {
      console.log("Ping success:", data);
    })
    .catch(error => {
      console.error("Ping error:", error);
    });
}

// hit immediately once
pingServer();

// then hit every 30 seconds
setInterval(pingServer, 30000);






