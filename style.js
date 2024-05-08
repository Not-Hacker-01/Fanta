var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#secondPage",
        start:"0% 95%",
        end:"50% 50%",
        scrub:true,
        // markers:true
    }

});


tl.to('#fantaCan',{
    top:'100%',
    left:'0%',
    height:'450px',
    ease: "slow"
},'same')
tl.to('#orange',{
    top:'120%',
    left:'60%',
    rotate:'360deg',
    ease: "slow"
},'same')

tl.to('#orangeSlices',{
    top:'140%',
    left:'20%',
    rotate:'360deg',
    ease: "slow",
    zIndex:3
},'same')

tl.to('#leaf',{
    top:'100%',
    left:'80%',
    rotate:'321deg',
    ease: "slow",
    zIndex:3
},'same')


var t2 = gsap.timeline({
    scrollTrigger:{
        trigger:'#third',
        start:"5% 95%",
        end:"50% 50%",
        // markers:true,
        scrub:true,
        ease: "slow"
    }
})

// t2.to('#leaf',{
//     top:'220%',
//     left:'0%',
//     rotate:'160deg'
// },'same')
// t2.to('#orangeSlices',{
//     top:'220%',
//     left:'0%',
//     rotate:'360deg'
// },'same')


t2.to('#fantaCan',{
    top:'220%',
    left:'35%',
    height:'350px',
    rotate:'360deg',
    zIndex:2,
    duration:3,
    ease: "slow"

  
},'o')
t2.to('#orange',{
    top:'230%',
    left:'36%',
    rotate:'-360deg',
    ease: "slow",
    zIndex:1,
    delay:1
  
})

t2.to('#orangethird',{
    left:'37%',
    rotate:'360deg',
    ease: "slow",
    width:'20%',
})

t2.to('#waterMelon',{
    left:'5%',
    top:'25%',
    rotate:'360deg',
    ease: "slow",
    width:'25%'
})
t2.to('#waterCan',{
    left:'5%',
    top:'18%',
    rotate:'360deg',
    ease: "slow",
    width:'25%'
})
t2.to('#strawCan',{
    right:'5%',
    top:'13%',
    rotate:'360deg',
    ease: "slow",
    width:'30%'
})
t2.to('#straw',{
    right:'7%',
    top:'10%',
    rotate:'360deg',
    ease: "slow",
    width:'25%'
})


var t3= gsap.timeline({
    scrollTrigger:{
        trigger:"#fourth",
        start:"30% 50%",
        end:"80% 50%",
        scrub:true,
        markers:true,
        pin:true
    }
})

t3.to('#gg',{
color:"red",
transform:"translateX(-2%)",
})