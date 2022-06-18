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

function update() {
    let element = document.getElementById('wpisy');
    element.innerHTML = '';
    let wpisy = getWpis().reverse();
    let empty = document.createElement('h1');
    empty.appendChild(document.createTextNode('Pusto tu, dodaj pierwszy wpis!'));
    element.appendChild(empty);
    if (wpisy.length !== 0) {
        element.removeChild(empty);
    }

    for (let i = 0; i < wpisy.length; i++) {
        let wpis = wpisy[i];
        const entry = document.createElement('div');
        entry.classList.add('wpis-entry');
        //tytul
        let title = document.createElement('h3');
        title.classList.add('entry-title');
        title.appendChild(document.createTextNode(wpis.tytul));
        entry.appendChild(title);
        //nick
        let nick = document.createElement('h5');
        nick.classList.add('entry-nick');
        nick.appendChild(document.createTextNode('Dodane przez: ' + wpis.nick));
        entry.appendChild(nick);
        //date
        let date = document.createElement('h6');
        date.classList.add('entry-date');
        date.appendChild(document.createTextNode(wpis.data));
        entry.appendChild(date);
        //tresc
        let tresc = document.createElement('h5');
        tresc.classList.add('entry-tresc');
        tresc.appendChild(document.createTextNode(wpis.tresc));
        entry.appendChild(tresc);
        //delete
        let deleteLink = document.createElement('a');
        deleteLink.classList.add('entry-delete');
        deleteLink.href = '#';
        deleteLink.addEventListener('click', (event) => {
            let newWpis = getWpis().filter((c) => {
                return c.tytul != wpis.tytul;
            });
            setWpis(newWpis);
            update();

            event.preventDefault();
        });
        deleteLink.appendChild(document.createTextNode('Usuń'));
        entry.appendChild(deleteLink);
        //edit
        let editLink = document.createElement('a');
        editLink.classList.add('entry-edit');
        editLink.href = '#divOne';
        editLink.addEventListener('click', (event) => {
            window.location = 'wpisy.html#divOne';
            const nick = document.querySelector('#nick');
            const title = document.querySelector('#title');
            var date = document.querySelector('#dataPublikacji');
            const tresc = document.querySelector('#tresc');
            nick.value = wpis.nick;
            nick.disabled = true;
            title.value = wpis.tytul;
            title.disabled = true;
            date.value = wpis.data;
            date.disabled = true;
            tresc.value = wpis.tresc;
            const button = document.querySelector('.form_btn');
            button.addEventListener('click', (event) => {
                let newWpis = getWpis().filter((c) => {
                    return c.tytul != wpis.tytul;
                });
                setWpis(newWpis);
                update();
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
                event.preventDefault();
            });

            event.preventDefault();
        });
        editLink.appendChild(document.createTextNode('Edytuj'));
        entry.appendChild(editLink);

        element.appendChild(entry);
        element.appendChild(document.createElement('br'));
    }
}

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

update();