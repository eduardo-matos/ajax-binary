// jQuery
$('#f').on('submit', function (evt) {
    var fd = new FormData(this);
    evt.preventDefault();
    
    $.ajax({
        url: this.action,
        data: fd,
        method: 'POST',
        processData: false,
        contentType: false
    });
});