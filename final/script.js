function redirectToMain() {
    window.location.href = "final/final1.html";
}

function redirectToBears() {
    window.location.href = "final/final2.html";
}

function redirectToHome() {
    window.location.href = "final/final2.html";
}

function redirectToCharacter() {
    window.location.href = "final/final3.html";
}

function redirectToComics() {
    window.location.href = "final/final4.html";
}

function openModal(imgSrc, altText) {
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalImg').alt = altText;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
};

function openModal(imgSrc, imgAlt) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImg");

    modalImg.src = imgSrc;
    modalImg.alt = imgAlt;
    modal.style.display = "block";

    var modalText = document.querySelector(".modal-text");
    modalText.style.display = "block";

    setTimeout(function() {
        modalText.style.display = "none";
    }, 2000);
}

var closeBtn = document.getElementById("close");
if (closeBtn) {
    closeBtn.addEventListener("click", function() {
        document.getElementById("modal").style.display = "none";
    });
}

const images = ['assets/img/Green Bear.PNG', 'assets/img/Yellow Bear.PNG', 'assets/img/Pink Bear.PNG', 'assets/img/Blue Bear.PNG'];
let index = 0;

function changeImage() {
  document.getElementById('loading-img').src = images[index];
  index = (index + 1) % images.length;
}

setInterval(changeImage, 1000);

document.getElementById('loading-img').addEventListener('load', function() {
    document.getElementById('loading-page').style.display = 'none';
    document.getElementById('content').style.display = 'block';
});