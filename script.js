// NAVBAR
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navbarMenu = document.querySelector('.navbar ul');

    menuIcon.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });
});

// PROGRAMS THAT WE OFFER
const scrollContainer = document.getElementById('scrollable-container');

// Increase scroll speed multiplier
scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    const scrollSpeed = 4; // Adjust this value for quicker scrolling (higher = faster)
    scrollContainer.scrollLeft += e.deltaY * scrollSpeed;
});

let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollContainer.classList.add('active');
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 3; // Adjust this value for drag scroll speed
    scrollContainer.scrollLeft = scrollLeft - walk;
});

// Optional: Touch Support for mobile
scrollContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 3; // Adjust this value for touch scroll speed
    scrollContainer.scrollLeft = scrollLeft - walk;
});



