
function openInvitation(){
  document.getElementById('opening').style.display='none';
  document.getElementById('music').play();
}

const targetDate = new Date("June 7, 2026 19:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("countdown").innerHTML =
    days + " Hari " + hours + " Jam " + minutes + " Menit Menuju Acara";
}, 1000);
