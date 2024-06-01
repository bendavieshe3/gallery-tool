$(document).ready(function () {
    // Load gallery list
    $.get('/api/gallery', function (data) {
        data.forEach(function (gallery) {
            $('#gallery-list').append(`<div>${gallery}</div>`);
        });
    });

    // Event listener for clicking on an image
    $('#gallery-list').on('click', 'img', function () {
        const src = $(this).attr('src');
        $('#image-fullscreen').attr('src', src);
        $('#image-viewer').show();
    });

    // Hide the image viewer when clicked
    $('#image-viewer').on('click', function () {
        $(this).hide();
    });
});