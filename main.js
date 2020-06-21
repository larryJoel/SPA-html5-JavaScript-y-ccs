document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show');

});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{ dalay: 500});
ScrollReveal().reveal('.cards-banner-one',{ dalay: 500});
ScrollReveal().reveal('.cards-banner-two',{ dalay: 500});