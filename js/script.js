document.getElementById("rubahnama").addEventListener("submit", function(event){
let nama = document.getElementById("nama").value;
if (!nama) {
    alert("Harap isi semua kolom!");
    return;
}
document.getElementById("output-nama").textContent = nama;
});


let index = 0;
const slides = document.querySelectorAll('.carousel_item');

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === n) {
            slide.classList.add('active');
        }
    });
}

// Tombol Next
function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

// Tombol Prev
function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

// Auto-Slide setiap 3 detik
setInterval(nextSlide, 3000);

// Tampilkan slide pertama saat halaman dimuat
showSlide(index);

document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil data dari form
    let name = document.getElementById("name").value;
    console.log(name);
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let message = document.getElementById("message").value;

    // Validasi input
    if (!name || !dob || !gender || !message) {
        alert("Harap isi semua kolom!");
        return;
    }

    // Menampilkan data ke output
    document.getElementById("output-name").textContent = name;
    document.getElementById("output-dob").textContent = dob;
    document.getElementById("output-gender").textContent = gender.value;
    document.getElementById("output-message").textContent = message;

    // Menampilkan waktu saat ini
    document.getElementById("current-time").textContent = new Date().toUTCString();

    // Reset form setelah submit
    document.getElementById("messageForm").reset();
});
