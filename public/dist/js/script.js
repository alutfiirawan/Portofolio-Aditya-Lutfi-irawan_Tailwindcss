// header
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else
        header.classList.remove('navbar-fixed');
}
// 1. saat window discroll kita kasih function kemudian const (buat variabel header) js tolong cari header ... 
// 2. buat variabel fixedNav kemudian ambil dari header . jarak antar atas 
// kemudian if windows,discrol page Y / dari atas lebih besar dari  fixednav (0).. maka tambahkan class baru add dinavbar-fixed, jika kembali lagi/ else maka hapus.


// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

// javascript cari class hamburger

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');

// klas tersebut kemudian diklik trus tambahin class toogle (jika diklik dia nambah class, jika diklik lagi menghapus kelas. bisa juga pake add/remove . kelasnya adalah hamburger-active)
});