function show(namaKelas){
    let kelas = document.querySelector(".nav-list-left");
    kelas.style.display = 'block';
}

function hide(namaKelas){
    let kelas = document.querySelector(".nav-list-left");
    kelas.style.display = 'none';
}
function HitungPersen(){
    var nilaiPersen = [];
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