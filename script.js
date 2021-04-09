$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Mobile", "Web", "Flutter", "Node.js", "React"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Mobile", "Web", "Flutter", "Node.js", "React"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

function anotherPic(){
    const decide = document.getElementById('changePic');
    if(decide.src=='https://cdn.vox-cdn.com/thumbor/fPJRYcGWmkUrR89XCmT551_Iqnk=/0x0:1440x810/1400x1400/filters:focal(513x203:743x433):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55801581/fairly_odd_parents.0.jpg'){
        decide.src = 'https://ak.picdn.net/shutterstock/videos/230848/thumb/1.jpg';
    }
    else if(decide.src='https://ak.picdn.net/shutterstock/videos/230848/thumb/1.jpg'){
        decide.src='https://cdn.vox-cdn.com/thumbor/fPJRYcGWmkUrR89XCmT551_Iqnk=/0x0:1440x810/1400x1400/filters:focal(513x203:743x433):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55801581/fairly_odd_parents.0.jpg'
    }
    return decide;
}



