// NOT WORKING ...




// to add locomotive with GSAP we have to we should use the js code from "https://codepen.io/GreenSock/pen/zYrELYe" i.e. locomotive scrolltirgger codepen.


// lastly we have to convert all "#main" with our scrolling parent eg. #main in our case.

gsap.registerPlugin(ScrollTrigger);


// --- SETUP START ---
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.defaults({ scroller: "#main" });
// --- SETUP END ---

// ***********************************************************************************
// delete the code between these *s.
// ***********************************************************************************



// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





gsap.from("#box1", {
  scale: 0,
  duration: 1,
  rotate: 360,  
})


gsap.from("#box2", {
    scale: 0,
    duration: 1,
    rotate: 360,
    scrollTrigger:{
        trigger: '##page2',
        scroll : '#main',
        markers: true,
        start: "top 50%",
        end: "top -100%",
        scrub: 3,
    }  
})

// gsap.from("#box3", {
//     scale: 0,
//     duration: 1,
//     rotate: 360,
// })