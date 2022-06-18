document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.form_input').forEach(function(input) {
        input.addEventListener('input', function() {
            input.className = input.className.replace(/form_input--error ?/, '');
        });
    });
    document.querySelector('#dataPublikacji').valueAsDate = new Date();
});

document.addEventListener('input', function nickValidate() {
    const nick = document.querySelector('#nick');
    if (nick.value.length < 3) {
        nick.addEventListener('input', function() {
            nick.classList.add('form_input--error');
        });
    } else {
        nick.classList.remove('form_input--error');
    }
});

document.addEventListener('input', function titleValidate() {
    const title = document.querySelector('#title');
    if (title.value.length < 3) {
        title.addEventListener('input', function() {
            title.classList.add('form_input--error');
        });
    } else {
        title.classList.remove('form_input--error');
    }
});

document.addEventListener('input', function dateValidator() {
    var date = document.querySelector('#dataPublikacji');
    var today = new Date();
    if (today.getDate() > date.valueAsDate.getDate()) {
        date.classList.add('form_input--error');
    } else {
        date.classList.remove('form_input--error');
    }
});

document.addEventListener('input', function textValidate() {
    const tresc = document.querySelector('#tresc');
    if (tresc.value.length < 3 || tresc.value.length > 500) {
        tresc.addEventListener('input', function() {
            tresc.classList.add('form_input--error');
        });
    } else {
        tresc.classList.remove('form_input--error');
    }
});

document.addEventListener('input', function anon() {
    if (document.getElementById('anonId').checked) {
        document.querySelector('#nick').value = 'Autor anonimowy';
    }
});

function getWpis() {
    return JSON.parse(localStorage.getItem('wpisy') || '[]');
}

function setWpis(wpisy) {
    localStorage.setItem('wpisy', JSON.stringify(wpisy));
}

function dodaj(wpisy, nick, tytul, data, tresc) {
    wpisy.push({
        nick: nick,
        tytul: tytul,
        data: data,
        tresc: tresc
    });
    return true;
}

function check() {
    const nick = document.querySelector('#nick');
    const title = document.querySelector('#title');
    var date = document.querySelector('#dataPublikacji');
    const tresc = document.querySelector('#tresc');
    if (
        nick.classList.contains('form_input--error') ||
        title.classList.contains('form_input--error') ||
        date.classList.contains('form_input--error') ||
        tresc.classList.contains('form_input--error') ||
        (nick.value == '' || title.value == '' || tresc.value == '')
    ) {} else {
        let wpisy = getWpis();
        if (dodaj(wpisy, nick.value, title.value, date.value, tresc.value)) {
            setWpis(wpisy);
            window.location = 'wpisy.html';
        }
    }
}