const animationElement = document.getElementById('zoomable-element');

animationElement.addEventListener('mouseover', () => {
    animationElement.style.transform = 'scale(1.2)';
});

animationElement.addEventListener('mouseout', () => {
    animationElement.style.transform = 'scale(1)';
});
