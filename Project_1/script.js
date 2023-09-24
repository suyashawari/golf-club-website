var crsr=document.querySelector("#cursor");
var blur=document.querySelector("#cursor-blur");
document.addEventListener("mousemove",(dets)=>{
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
    blur.style.left=dets.x-150+"px";
    blur.style.top=dets.y-150+"px";
    

})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
      
        start:"top -10%",
        end:"top -11",
        scrub:2
    }
});
gsap.to("#main",{
    backgroundColor:"#000",
    duration:1,
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        marker:true,
        start:"top -30%",
        scrub:2
    }
})