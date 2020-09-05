//Slideshow
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";//.style.display
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";//.style.display
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
//Query
function getInput() {
    var submit = document.getElementById("submit").value;
    console.log('Query: ' + submit);
    alert("Query Recorded");
}
//Stu Details
function stu() {
    var name = document.getElementById("name").value;
    var e = document.getElementById("email").value;
    var reg = document.getElementById("reg").value;
    console.log('Name: ' + name);
    console.log('EMAIL: ' + e);
    console.log('REG.NO: ' + reg);
    alert("Verified Student Details");
}
//back
function goBack() {
    window.location.replace("../index.html")
}
//second page navigation
function index() {
    window.location.replace("pages/Page1.html");
}

//test page
function mcq() {
    window.location.replace("mcq.html")
}

//back to page 1
function goBacktopage1() {
    window.location.replace("Page1.html");
}

//project page
function project() {
    window.location.replace("Project.html")
}

//mcq test submit
function submit() {
    alert("You Will Be Redirected To Your Profile")
    window.location.replace("Page1.html");
}

