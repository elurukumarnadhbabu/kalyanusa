// JavaScript Document
const nextIcon = '<img src="images/Rightarrow.jpg" alt:"right">';
const prevIcon = '<img src="images/leftarrow.jpg" alt:"left">';

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
	dots: false,
    nav : true,
	navText: [
		prevIcon,
		nextIcon
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})