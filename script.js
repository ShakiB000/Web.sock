function loding(){
    var t1 = gsap.timeline()

t1.to("#yellow1",{
    top: '-100%',
    delay: 0.2,
    duration: 0.4,
    ease: 'expo.out'
})
t1.from("#yellow2",{
    top: '100%',
    delay: 0.2,
    duration: 0.7,
    ease: 'expo.out'
},"anam");

t1.to("#loder h1",{
    color: 'black',
    delay: 0.2
},"anam");

t1.to(".core-logo",{
    //   top: "-100%",
    color: 'black',
    // stagger: true,
    delay: -2,
    
    duration: -2
},);

t1.to("#loder",{
    // opacity: 0
    display: "none"
});
t1.to("#loder",{
    opacity: 0
   
});
};

loding();


    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
    
    // t1.from("#page1",{
    //     top: '100%',
    //     delay: 0.5,
    //     duration: 1,
    //     ease: 'expo.out'
    // })
    
    document.querySelector("#footer h1").addEventListener("click",function() {
        scroll.scrollTo(0)
    })
    
    
    var elems = document.querySelectorAll(".elem")
    var bac = document.querySelector("#page2")
    elems.forEach(function(ele){
        ele.addEventListener("mouseenter",function(){
               var bgimg =  ele.getAttribute("data-img")
              page2.style.backgroundImage = `url(${bgimg})`
        });
        console.log(ele)
    });

