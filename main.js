onload = () =>{
        document.body.classList.remove("container");
};
window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('encouragement').style.display = 'block';
        }, 5000); // Sesuaikan durasi ini dengan waktu akhir animasi bunga
    });
