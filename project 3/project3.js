let main_image = document.querySelector('.main_image');
let container = document.querySelector('.container');
let hover_nav = document.querySelector('.hover_nav');

function phones(phone_colors) {
    main_image.src = phone_colors;
}

function colors(color) {
    container.style.background = color;

    // Change hover color when setting the container background color
    hover_nav.classList.add('color'); // Assuming you have a .hover_color class in your CSS
}

// Adding hover color revert functionality
container.addEventListener('mouseleave', function() {
    hover_nav.classList.remove('hover_color');
}
);
