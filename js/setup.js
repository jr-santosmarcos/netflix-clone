function abrir(){
    document.getElementById('popup').style.display = 'block';
}
function fechar(){
    document.getElementById('popup').style.display =  'none';
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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

