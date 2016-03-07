(function () {
    var buttonSound = document.querySelector('#button-sound');
    var buttonClear = document.querySelector('#button-clear');
    var input = document.querySelector('#textarea-input');
    var element = document.querySelector('#sense-synthesis');

    input.addEventListener('input', function (e) {
        element.setAttribute('text', input.value);
    });

    buttonSound.addEventListener('click', function (e) {
        e.preventDefault();
        element.speak();
    });
})();