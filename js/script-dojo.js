// Dojo
require(['dojo/request/xhr', 'dojo/dom', 'dojo/on'], function (xhr, dom, on) {
    var f = dom.byId('f');
    var btn = dom.byId('submit');

    on(f, 'submit', function (evt) {
        evt.preventDefault();
        var fd = new FormData(this);

        xhr.post(f.action, {
            data: fd,
            headers: {
                'Content-Type': false
            }
        });
    });
    
});