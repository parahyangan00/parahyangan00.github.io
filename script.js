
/*  -----------------------------------------------------------------
------------------------ kode cabang---------------------------------
------------------------------------------------------------------ */
const pasirwangi =321;
const cikajang =444;
const pangatikan =789;
const sukaraja =928;
const sariwangi =859;
const manonjaya =776;
/*  -----------------------------------------------------------------
------------------------ pengkondisian login-------------------------
------------------------------------------------------------------ */
const tombolMasuk = document.querySelector('#masuk');
tombolMasuk.addEventListener('click',function(){
    const pasKode = prompt('Masukan Kode Cabang');
    if(pasKode == pasirwangi){
        window.location.href='pasirwangi.html';
    }else if(pasKode == cikajang){
        window.location.href='cikajang.html';
    }else if(pasKode == pangatikan){
        window.location.href='pangatikan.html';
    }else if(pasKode == sukaraja){
        window.location.href='sukaraja.html';
    }else if(pasKode == sariwangi){
        window.location.href='sariwangi.html';
    }else if(pasKode == manonjaya){
        window.location.href='manonjaya.html';
    }else{
        alert('kode cabang salah!')
    }

});