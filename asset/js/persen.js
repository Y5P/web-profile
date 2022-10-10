// alert($(".persen-val").text());
function mobileMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-list");
    const navi = document.querySelector("nav");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navi.classList.toggle("active");
}

function HitungPersen(){
    var nilaiPersen = [];
    // alert("skdal")
    $(".persen-val").each(function() {
        // alert($(this).html());
        nilaiPersen.push($(this).html());
    });
    i=0;
    $(".bar-persen").each(function() {
        // alert($(this).html());
        $(this).css({
            'width':nilaiPersen[i],
            'transition':'2s'});
        // alert(nilaiPersen[i]);
        i++;
    });
}
function NolPersen(){
    $(".bar-persen").each(function() {
        // alert($(this).html());
        $(this).css({
            'width':'0%',
            'transition':'2s'});
        // alert(nilaiPersen[i]);
    });
}