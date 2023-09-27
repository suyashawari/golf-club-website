var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 150 + "px";
    blur.style.top = dets.y - 150 + "px";


})

// not working check 
// var h4all = document.querySelectorAll("#nav h4")
// h4all.forEach(function (elem) {
//     elem.addEventListener("mouseover", function () {
//         crsr.style.scale = 3;
//         crsr.style.border = "2px solid #fff";
//     })

// });



gsap.from("#about-us  #about-text , #about-img1 , #about-img2",{
    y:50,
    opacity:0,
    duration:0.5,
   
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
      
        start:"top 60%",
        bottom:"top 58%",
        scrub:1
    }
})

gsap.from(".card ",{
    scale:0.5,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 60%",
        scrub:1
    }
})


gsap.from("#colon1",{
    x:-60,
    y:-60,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        scrub:2
    }
})

gsap.from("#colon2",{
    x:60,
    y:60,
    
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 48%",
        scrub:4
    }
})
gsap.from(" #page4 h1",{
    y:50,
    
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end: "top 70%",
        scrub:2 
    }
})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",

        start: "top -10%",
        end: "top 100%",
        scrub: 4
    }
});
gsap.to("#main", {
    backgroundColor: "#000",
    duration: 1,
    scrollTrigger: {
        trigger: "main",
        scroller: "body",
        marker: true,
        start: "top -30%",
        end: "top -31%",
        scrub: 2
    }
})

