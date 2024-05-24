gsap.registerPlugin(ScrollTrigger);

window.onload = function(){
    // GSAP Animation JS
    fadeUp();
    slideUp();
    imageReveal();
};

let allowRotation = true;
window.addEventListener("mousemove", (mouseEvent) => {
    const { clientX, clientY } = mouseEvent;
    gsap.to("#blob", {
        left: clientX,
        top: clientY,
        duration: 2
    });
});

function fadeUp() {
    let reveal = document.querySelectorAll(".title")
    reveal.forEach((el) => {
        let child = el.querySelectorAll("span")
        //let btn = el.querySelector(".btn")
        let tl = gsap.timeline()
        .from(child, {
            y: 80,
            stagger: 0.05,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
            onComplete: function() {
                // $(this).addClass('animated');
                el.classList.toggle("animated"); 
            }
        })
        ScrollTrigger.create({
            trigger: el,
            start: "center 100%",
            end: "top 50%",
            //  markers: true,
            toggleActions: "play none none reverse",
            animation: tl
        })
    });
}

function slideUp() {
    // Slide Up Text Animation JS
    let slideUp = document.querySelectorAll(".slide_up")
    slideUp.forEach((el) => {
        let child = el.querySelectorAll("span")
        let tl = gsap.timeline()
        .from(child, {
            y: 100,
            duration: 2,
            ease: "power3.out",
            // delay: 1,
            skewY: 7,
            opacity: 0,
            // stagger: {
            //     amount: 1
            // }
            onComplete: function() {
                // $(this).addClass('animated');
                el.classList.toggle("animated"); 
            }
        })
        ScrollTrigger.create({
            trigger: el,
            start: "center 100%",
            end: "top 50%",
            //  markers: true,
            toggleActions: "play none none reverse",
            animation: tl
        })
    });
}

function imageReveal() {
    // Image Reveal Animation JS
    let imageContainer = document.querySelectorAll(".image_reveal");
    imageContainer.forEach((el) => {
        let image = el.querySelector("img");
        let tl = gsap.timeline()
        tl.set(el, { autoAlpha: 1 });
        tl.from(el, 2, {
            xPercent: -100,
            ease: 'power3.out',
            onComplete: function() {
                // $(this).addClass('animated');
                el.classList.toggle("animated"); 
            }
        });
        tl.from(image, 2, {
            xPercent: 100,
            scale: 1.3,
            delay: -2,
            ease: 'power3.out',
        });
        ScrollTrigger.create({
            trigger: el,
            start: "center 100%",
            end: "top 50%",
            //  markers: true,
            toggleActions: "play none none reverse",
            animation: tl
        })
    });
}


gsap.set(".horizontal_scroll_section .row",{
    xPercent: -10,
});
gsap.to(".horizontal_scroll_section .row",{
    x: () => -window.innerWidth,
    duration: 2,
    ease: "power3.out",
    scrollTrigger:{
        trigger:".horizontal_scroll_section",
        scroller:"body",
        markers:true,
        start:"top 90%",
        end:"bottom 10%",
        scrub: 5,
        // pin:true,
    }
});