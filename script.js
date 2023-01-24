gsap.to(".a",{
    scrollTrigger:{
        trigger: "#first",
        start: "top top",
        scrub: 1,
        end: "bottom 30%" 
    },
    opacity: 0,
    duration:2,
    ease: Expo.easeInOut,
    stagger: .8
})
gsap.to(".b",{
    scrollTrigger:{
        trigger: "#second",
        start: "top center",
        scrub: 1,
        end: "center 70%"
    },
    width: "25%",
    duration: 2,
    ease: Expo.easeInOut,
})