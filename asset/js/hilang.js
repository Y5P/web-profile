hilang();

function hilang(){
    const arrow = $(".arrow-up");
    let kelasnya = $(".hilangJS");
    const bodi = $('body').scrollTop();
    if(bodi > 50){
        arrow.css({
            'opacity':'1',
            'transition':'0.3s'
        });
    }else{
        arrow.css({
            'opacity':'0',
            'transition':'0.3s'
        });
    }

    // alert($(".hilangJS:nth-child(2)").offset().top);
    // alert(kelasnya.length);
    for (let i = 0; i < kelasnya.length; i++) {
        // kelasnya[i].style.display = "none";  
        // alert($(".hilangJS:nth-child(1)").offset().top);
        // alert($(".hilangJS").eq(i).offset().top);
        if($(".hilangJS").eq(i).offset().top < 450){
            $(".hilangJS").eq(i).css({
                'opacity':'1',
                'transition':'0.3s'
            });
        }else{
            $(".hilangJS").eq(i).css({
                'opacity':'0',
                'transition':'0.3s'
            });
        }

        //Untuk Persentase Skill
        if($(".hilangJS").eq(1).offset().top < 450){
            HitungPersen()
        }else{
            NolPersen()
        }
        
    }
    setTimeout(hilang, 100); 
}

function tampilkanOtomatis(jumlah,aktif,kelas){
    for(i=0;i<jumlah;i++){
        if(i==aktif-1){
            tampilkan(kelas+":eq("+i+")");
        }else{
            hilangkan(kelas+":eq("+i+")");
        }
    }
}
function tampilkan(kelas){
    $(kelas).css({
        'display':'inline-block',
        'transition':'0.5'
    })
}

function hilangkan(kelas){
    $(kelas).css({
        'display':'none',
        'transition':'0.5'
    })
}