
Posisi();
$(".MyProfile div").css('opacity','0');

function Geser(Tujuan){
    $('body').scrollTop(Tujuan);
}
function CheckPosisi(){
    alert($('html').scrollTop());
    // let slides = $(".flexbox-x-c");
    // alert(slides.length);
    // for (let i = 1; i <= slides.length; i++) {
    //     // slides[i].style.display = "none";  
    //     alert($(".flexbox-x-c:nth-child("+i+")").position().top);
    // }
    // BanyakSlide++;
    // if (BanyakSlide > slides.length) {BanyakSlide = 1}      
    // slides[BanyakSlide-1].style.display = "block";  
}
function fullGaleri(){
    if($(".GaleriPic").css("height") == "514.4px"){
        $(".GaleriPic").css({
            "height":"fit-content",
            "transition":"1s"
        })
        $('body').scrollTop(2190);
        $(".TombolGaleri p").text("CLICK TO HIDE PICTURE");
    }else{
        $(".GaleriPic").animate({
            height:"514.4px"
        },"fast");
        $('body').scrollTop(1230);
        $(".TombolGaleri p").text("CLICK FOR MORE PICTURE");
    }
}
function tutupGaleri(){
        $(".GaleriPic").animate({
            height:"514.4px"
        },"fast");
        $(".TombolGaleri p").text("CLICK FOR MORE PICTURE");
}

function Posisi() {
    const bodi = $('html').scrollTop();
    const Skill= $(".Skill").offset().top;
    const LokBody = $("html").scrollTop();
    const project = $("#project").offset().top;
    const about = $("#about").offset().top;
    if(LokBody < project-400){
        $("#project *").css({
            'opacity':'0',
            'transition':'1s'
        });
        NolPersen();
        // $(".MyProfile div").css('display','none');
    }else{
        // $(".MyProfile div").css('display','block');
        $("#project *").css({
            'opacity':'1',
            'transition':'0.3s'
        });
        HitungPersen();
    }
    if(LokBody < about-400){
        $("#about *").css({
            'opacity':'0',
            'transition':'1s'
        });
        NolPersen();
        // $(".MyProfile div").css('display','none');
    }else{
        // $(".MyProfile div").css('display','block');
        $("#about *").css({
            'opacity':'1',
            'transition':'0.3s'
        });
        HitungPersen();
    }
    if(LokBody < Skill-400){
        $(".Skill *").css({
            'opacity':'0',
            'transition':'1s'
        });
        NolPersen();
        // $(".MyProfile div").css('display','none');
    }else{
        // $(".MyProfile div").css('display','block');
        $(".Skill *").css({
            'opacity':'1',
            'transition':'0.3s'
        });
        HitungPersen();
    }
  setTimeout(Posisi, 100); 
}