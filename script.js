const pasirwangi = document.getElementById('pasirwangi');
const cikajang = document.getElementById('cikajang');
const pangatikan = document.getElementById('pangatikan');
const sukaraja = document.getElementById('sukaraja');
const sariwangi = document.getElementById('sariwangi');
const manonjaya = document.getElementById('manonjaya');
const myAlert = document.querySelector('.my-alert');


pasirwangi.addEventListener('click', function () {
    const p1 = prompt('masukan kode cabang:');
    const kodepsw = 321;
    if (p1 == kodepsw) {
        window.location.href = "cashflow/pasirwangi/index.html";
    } else {
        myAlert.classList.remove('d-none');
    }
});

cikajang.addEventListener('click', function () {
    const p2 = prompt('masukan kode cabang:');
    const kodeckj = 444;
    if (p2 == kodeckj) {
        window.location.href = "cashflow/cikajang/index.html";
    } else {
        myAlert.classList.remove('d-none');
    }
});

pangatikan.addEventListener('click', function () {
    const p3 = prompt('masukan kode cabang:');
    const kodepgn = 789;
    if (p3 == kodepgn) {
        window.location.href = "cashflow/pangatikan/index.html";
    } else {
        myAlert.classList.remove('d-none');
    }
});

sukaraja.addEventListener('click', function () {
    const p4 = prompt('masukan kode cabang');
    const kodeskj = 928;

    if (p4 == kodeskj) {
        window.location.href = "cashflow/sukaraja/index.html";
    } else {
        myAlert.classList.remove('d-none');
    }
});

sariwangi.addEventListener('click', function () {
    const p5 = prompt('masukan kode cabang:');
    const kodesrw = 859;
    if (p5 == kodesrw) {
        window.location.href = "cashflow/sariwangi/index.html";
    } else {
        myAlert.classList.remove('d-none');
    }
});

manonjaya.addEventListener('click', function () {
    const p6 = prompt('masukan kode cabang:');
    const kodemnj = 776;
    if (p6 == kodemnj) {
        window.location.href = "cashflow/manonjaya/index.html";
    } else {
        myAlert.classList.remove('d-none');
    }
});