// Selected the two navigation bars 
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");

document.addEventListener ('scroll', function(){
    if (window.pageYOffset > 0) {
        nav1.style.display = "none";
        nav2.style.display = "flex";
        nav2.style.position ="fixed";
        nav2.style.top ="0";
    } else {
        nav1.style.display ="flex";
        nav2.style.display = "none";
    }
})