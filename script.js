
// ===============================
// MENU NAVIGASI
// ===============================
const menuToggle = document.querySelector("#menuToggle");
const navMenu = document.querySelector("#navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}

// Menutup menu setelah link diklik
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function () {
        navMenu?.classList.remove("active");
    });
});

// ===============================
// ANIMASI SCROLL
// ===============================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".hidden").forEach(element => {
    observer.observe(element);
});

// ===============================
// TOMBOL KEMBALI KE ATAS
// ===============================
const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", function () {
    if (backToTop) {
        backToTop.style.display =
            window.scrollY > 300 ? "block" : "none";
    }
});

backToTop?.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===============================
// FORM KONTAK
// ===============================
function kirimPesan(event) {
    event.preventDefault();

    const nama = document.querySelector("#nama").value;
    const email = document.querySelector("#email").value;
    const pesan = document.querySelector("#pesan").value;

    const nomorWA = "6282370704597";

    const teks = `Halo, saya ${Khairul Akbar}.
Email: ${Khairulakbar@gmain.com}
Pesan: ${jangan lupa follow}`;

    const url = `https://wa.me/${082370704597}?text=${encodeURIComponent(teks)}`;

    window.open(url, "_blank");
}

// ===============================
// TAHUN OTOMATIS
// ===============================
const tahun = document.querySelector("#tahun");

if (tahun) {
    tahun.textContent = new Date().getFullYear();
}
