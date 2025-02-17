const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPA(){
    var t1=gsap.timeline();
    t1.from("#header",{
        y: '-10',
        opacity:0,
        ease:Expo.easeInOut,
        duration:1.5
    })
    .to(".bounelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:.2
    })
    .from("#ch",{
        y:-10,
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
        delay:-1
    })
}
var timeout;
function mck(){
    var xs=1;
    var ys=1;
    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);
        var xdiff=dets.clientX -xprev;
        var ydiff=dets.clientY -yprev;
        xs=gsap.utils.clamp(.8,1.2,xdiff);
        ys=gsap.utils.clamp(.8,1.2,ydiff);
        xprev=dets.clientX;
        yprev=dets.clientY;
        circleMouse(xs,ys);
        timeout=setTimeout(function(){
            document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        },100);
    });
}

function circleMouse(xs,ys){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xs},${ys})`;
    })
}
document.querySelectorAll(".elem").forEach(function (elem) {
    const img = elem.querySelector("img");

    elem.addEventListener("mousemove", function (dets) {
        gsap.to(img, {
            opacity: 1,
            x: dets.clientX - elem.getBoundingClientRect().left - img.width / 2,
            y: dets.clientY - elem.getBoundingClientRect().top - img.height / 2,
            ease: Power1.easeOut,
            duration: 0.3
        });
    });

    elem.addEventListener("mouseleave", function () {
        gsap.to(img, {
            opacity: 0,
            ease: Power1.easeOut,
            duration: 0.3
        });
    });
});

circleMouse();
firstPA();
mck();
