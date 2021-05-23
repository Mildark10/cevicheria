var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1900);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function menuResponsive() {
    const menuResponsive = document.querySelector('.menuResponsive');
    const navigation = document.querySelector('.navigation');
    menuResponsive.classList.toggle('active');
    navigation.classList.toggle('active');
}