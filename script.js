const pasirwangi = document.getElementById('pasirwangi');
const cikajang = document.getElementById('cikajang');
const pangatikan = document.getElementById('pangatikan');
const sukaraja = document.getElementById('sukaraja');
const sariwangi = document.getElementById('sariwangi');
const manonjaya = document.getElementById('manonjaya');
const losAngsuran = document.getElementById('losAngsuran');
const myAlert = document.querySelector('.my-alert');

// kode rahasia cabang
const kodePasirwangi = 321;
const kodeCikajang = 444;
const kodePangatikan = 789;
const kodeSukaraja = 928;
const kodeSariwangi = 859;
const kodeManonjaya = 776;

// pengkondisian
pasirwangi.addEventListener('click', function () {
    const p1 = prompt('masukan kode cabang:');
    if (p1 == kodePasirwangi) {
        window.location.href = "cashflow/pasirwangi/index.html";
    } else {
        myAlert.classList.remove('d-none');
    }
});

cikajang.addEventListener('click', function () {
    const p2 = prompt('masukan kode cabang:');
    if (p2 == kodeCikajang) {
        window.location.href = "cashflow/cikajang/index.html";
    } else {
        myAlert.classList.remove('d-none');
    }
});

pangatikan.addEventListener('click', function () {
    const p3 = prompt('masukan kode cabang:');
    if (p3 == kodePangatikan) {
        window.location.href = "cashflow/pangatikan/index.html";
    } else {
        myAlert.classList.remove('d-none');
    }
});

sukaraja.addEventListener('click', function () {
    const p4 = prompt('masukan kode cabang');
    if (p4 == kodeSukaraja) {
        window.location.href = "cashflow/sukaraja/index.html";
    } else {
        myAlert.classList.remove('d-none');
    }
});

sariwangi.addEventListener('click', function () {
    const p5 = prompt('masukan kode cabang:');
    if (p5 == kodeSariwangi) {
        window.location.href = "cashflow/sariwangi/index.html";
    } else {
        myAlert.classList.remove('d-none');
    }
});

manonjaya.addEventListener('click', function () {
    const p6 = prompt('masukan kode cabang:');
    if (p6 == kodeManonjaya) {
        window.location.href = "cashflow/manonjaya/index.html";
    } else {
        myAlert.classList.remove('d-none');
    }
});

losAngsuran.addEventListener('click',function(){
const p7 = prompt('masukan koede cabang:');
if(p7 == kodePasirwangi){
    window.location.href = "los/index.html";
}else if(p7 == kodeCikajang){
    window.location.href="los/index2.html";
}else if(p7 == kodePangatikan){
    window.location.href="los/index3.html";
}else if(p7 == kodeSukaraja){
    window.location.href="los/index4.html";
}else if(p7 == kodeSariwangi){
    window.location.href="los/index5.html";
}else if(p7 == kodeManonjaya){
    window.location.href="los/index6.html";
}else{
    myAlert.classList.remove('d-none');
}
});