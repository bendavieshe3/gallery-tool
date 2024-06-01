$(document).ready(function () {
    // Load gallery list
    $.get('/api/gallery', function (galleries) {
        galleries.forEach(function (gallery) {
            $('#gallery-list').append(`<div class="gallery" data-name="${gallery}">${gallery}</div>`);
        });
    });

    // Load images when a gallery is clicked
    $('#gallery-list').on('click', '.gallery', function () {
        const galleryName = $(this).data('name');
        $.get(`/api/gallery/${galleryName}`, function (images) {
            $('#gallery-images').empty();
            images.forEach(function (image) {
                const thumbnailSrc = `/api/image/${galleryName}/${image}/thumbnail`;
                $('#gallery-images').append(`<img src="${thumbnailSrc}" class="thumbnail" data-gallery="${galleryName}" data-image="${image}">`);
            });
        });
    });

    // Display full image when a thumbnail is clicked
    $('#gallery-images').on('click', '.thumbnail', function () {
        const src = `/api/image/${$(this).data('gallery')}/${$(this).data('image')}`;
        $('#image-fullscreen').attr('src', src);
        $('#image-viewer').show();
    });

    // Hide the image viewer when clicked
    $('#image-viewer').on('click', function () {
        $(this).hide();
    });
});