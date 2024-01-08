const header = document.querySelector("header");

window.addEventListener("scroll", function() {
	header.classList.toggle("sticky", window.scrollY > 70);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

function openModal(imageSrc) {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('modalImg').src = imageSrc;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Close modal if clicked outside the image
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
};