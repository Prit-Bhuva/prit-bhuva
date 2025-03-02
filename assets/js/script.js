// Typing Text Js
$(document).on('DOMContentLoaded', function () {
    window.ityped.init(document.querySelector('.ityped'), {
        strings: ['HI THERE!', 'I’M PRIT BHUVA_', 'WordPress Developer!', 'PHP Developer!'],
        loop: true
    });
});
/*------------------------------------- Whole Page Scrolling Animation -------------------------------------*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
        target.classList.toggle('show', isIntersecting);
    });
});

const hiddenElements = document.querySelectorAll('.fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down');

document.addEventListener('DOMContentLoaded', () => {
    hiddenElements.forEach((el) => {
        if (el instanceof Element) {
            observer.observe(el);
        }
    });
});

/*------------------------------------- Preloader -------------------------------------*/
(function ($) {
    $(window).on('load', function () {
        const svg = document.getElementById("loade-svg");
        const tl = gsap.timeline();

        const shapes = {
            start: "M0 502S175 272 500 272s500 230 500 230V0H0Z",
            end: "M0 2S175 1 500 1s500 1 500 1V0H0Z"
        };

        tl.to(".loading", {
            delay: 1.2,
            y: -50,
            opacity: 0,
            duration: 0.6
        })
            .to(svg, {
                duration: 0.6,
                attr: { d: shapes.start },
                ease: "power1.easeIn"
            })
            .to(svg, {
                duration: 0.6,
                attr: { d: shapes.end },
                ease: "power1.easeOut"
            })
            .to(".preloader", {
                y: -1000,
                duration: 0.8
            })
            .set(".preloader", {
                zIndex: -1,
                display: "none"
            });
    });
}(jQuery));
/*------------------------------------- Menu Toggle -------------------------------------*/
$(document).ready(function () {
    const $menuToggle = $('#menu-toggle');
    const $sideMenu = $('.side-menu-main');
    const $hamburger = $('.hamburger');

    $(document).on('click', '.menu-list-main li', function (e) {
        e.preventDefault();

        const $link = $(this).find('a');
        const targetId = $link.attr('href') ? $link.attr('href').substring(1) : null;

        if (targetId && $('#' + targetId).length) {
            $('#' + targetId)[0].scrollIntoView({ behavior: 'smooth' });
        }

        $sideMenu.removeClass('show');
        $hamburger.removeClass('is-active');
    });

    $menuToggle.on('click', function () {
        $sideMenu.toggleClass('show');
        $hamburger.toggleClass('is-active', $sideMenu.hasClass('show'));
    });

    new MutationObserver(() => {
        if (!$sideMenu.hasClass('show')) {
            $hamburger.removeClass('is-active');
        }
    }).observe($sideMenu[0], { attributes: true, attributeFilter: ['class'] });
});

/*------------------------------------- Scroll counter -------------------------------------*/
var counted = 0;
$(window).on('scroll', function () {
    var oTop = $('.counter').offset()?.top - window.innerHeight;
    if (counted === 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 800,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
        });
        counted = 1;
    }
});

/*------------------------------------- Tabs -------------------------------------*/
$(function () {
    $(document).on('click', '.tab-btn-main a', function (e) {
        e.preventDefault();
        const tabId = $(this).data('tab');
        $('.tab-btn-main a, .Tabcondent').removeClass('tab-active');
        $(this).addClass('tab-active');
        $('#' + tabId).addClass('tab-active');
    });
});

/*------------------------------------- Pop Videos -------------------------------------*/
$(document).ready(function () {
    $('.vimeo').magnificPopup({
        items: {
            src: 'https://vimeo.com/259411563'
        },
        type: 'iframe'
    });

    $('.youtube').magnificPopup({
        items: {
            src: 'https://www.youtube.com/watch?v=PavYAOpVpJI'
        },
        type: 'iframe'
    });

    $('.soundcloud').magnificPopup({
        type: 'soundcloud',
        items: {
            src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163522130&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        },
        type: 'iframe',
    });
});

/*------------------------------------- Testimonial Slider -------------------------------------*/
$(document).ready(function () {
    $('.testimonial').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 1000,
    });
});
/*------------------------------------- Infinite Marquee -------------------------------------*/
document.querySelectorAll('.logos').forEach(function (logosContainer) {
    const copy = logosContainer.querySelector('.logos-slide').cloneNode(true);
    logosContainer.appendChild(copy);
});
/*------------------------------------- Skill Bar Circular -------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const progressItems = document.querySelectorAll(".progress-item");
    const colors = ['#bce70c', '#ff759c', '#00cc97', '#ffdb59', '#6f39fd'];

    progressItems.forEach((item, index) => {
        const skillName = item.getAttribute("data-skill");
        const skillLabel = document.createElement("div");
        skillLabel.className = "skill-label";
        skillLabel.textContent = skillName;

        item.appendChild(skillLabel);

        const color = colors[index % colors.length];
        item.style.background = `conic-gradient(${color} 0%, #000000 0%)`;
    });

    const progressSection = document.querySelector("#progress");
    const observerOptions = { threshold: 0.3 };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                progressItems.forEach((item, index) => {
                    const skillValue = parseInt(item.getAttribute("data-value"));
                    const color = colors[index % colors.length];
                    let count = 0;
                    const interval = setInterval(() => {
                        if (count >= skillValue) {
                            clearInterval(interval);
                        } else {
                            count++;
                            item.style.background = `conic-gradient(${color} ${count}%, #000000 ${count}%)`;
                            item.setAttribute("data-value", count);
                        }
                    }, 20);
                });
                observer.unobserve(progressSection);
            }
        });
    }, observerOptions);
    if (progressSection) {
        observer.observe(progressSection);
    }
});

/*------------------------------------- Bottom To Top Button -------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.bottom-top-button');
    window.addEventListener('scroll', () => {
        button.style.display = window.pageYOffset > 100 ? 'block' : 'none';
    });
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

/*------------------------------------- Load More Button -------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const loadMoreBtn = document.getElementById("loadMore");
    const tabButtons = document.querySelectorAll(".tab-btn");
    const itemsToShow = 2; // Number of items to show initially
    let currentIndex = itemsToShow;

    function showInitialItems() {
        const galleryItems = document.querySelectorAll("#one .gallery-item");
        galleryItems.forEach((item, index) => {
            if (index < itemsToShow) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        });

        // Show Load More button only if there are more items
        loadMoreBtn.style.display = galleryItems.length > itemsToShow ? "block" : "none";
    }

    function loadMoreItems() {
        const galleryItems = document.querySelectorAll("#one .gallery-item");
        for (let i = currentIndex; i < currentIndex + itemsToShow; i++) {
            if (galleryItems[i]) {
                galleryItems[i].classList.add("visible");
            }
        }
        currentIndex += itemsToShow;

        // Hide Load More button if all items are shown
        if (currentIndex >= galleryItems.length) {
            loadMoreBtn.style.display = "none";
        }
    }

    // Show initial items on page load
    showInitialItems();

    // Load More button click event
    loadMoreBtn.addEventListener("click", loadMoreItems);

    // Tab switch logic
    tabButtons.forEach((button) => {
        button.addEventListener("click", function () {
            let activeTab = document.querySelector(".tab-btn.tab-active");
            if (activeTab) activeTab.classList.remove("tab-active");
            this.classList.add("tab-active");

            let tabId = this.getAttribute("data-tab");
            let activeContent = document.querySelector(".Tabcondent.tab-active");
            if (activeContent) activeContent.classList.remove("tab-active");

            let selectedContent = document.getElementById(tabId);
            if (selectedContent) selectedContent.classList.add("tab-active");

            // Reset Load More functionality only for tab "one"
            if (tabId === "one") {
                showInitialItems();
            } else {
                loadMoreBtn.style.display = "none"; // Hide Load More for other tabs
            }
        });
    });
});

/*------------------------------------- Form submission -------------------------------------*/
document.getElementById("contactForm").addEventListener("submit", async function (event) {
    console.log('form is submitted')
    event.preventDefault(); // Prevent form redirection
    
    let form = event.target;
    let formData = new FormData(form);
    
    try {
        console.log('form is submitted and inside the try block')
        let response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            console.log(response);
            document.getElementById("formMessage").textContent = "Thank you! Your message has been sent.";
            document.getElementById("formMessage").style.display = "block";
            form.reset();
        } else {
            document.getElementById("formMessage").textContent = "Oops! Something went wrong.";
            document.getElementById("formMessage").style.display = "block";
            document.getElementById("formMessage").style.color = "red";
        }
    } catch (error) {
        console.log(error);
        document.getElementById("formMessage").textContent = "Network error. Please try again.";
        document.getElementById("formMessage").style.display = "block";
        document.getElementById("formMessage").style.color = "red";
    }
});
