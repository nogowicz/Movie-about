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

class Wpis {
    constructor(nick = '', tytul = '', data = new Date(), tresc = '') {
        this.nick = nick;
        this.tytul = tytul;
        this.data = data;
        this.tresc = tresc;
    }

    pokaz() {
        return 'Wpis: nick: ' + this.nick + ' Tytuł: ' + this.tytul + ' Data: ' + this.data + ' Treść = ' + this.tresc;
    }
}

function dodaj() {
    wpis = new Wpis();

    wpis.nick = document.querySelector('#nick').value;
    wpis.tytul = document.querySelector('#title').value;
    wpis.data = document.querySelector('#dataPublikacji').value;
    wpis.tresc = document.querySelector('#tresc').value;

    wpisJSON = JSON.stringify(wpis);

    sessionStorage.setItem(`${document.querySelector('#title').value}`, wpisJSON);
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
        dodaj();
    }
}