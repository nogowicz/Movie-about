var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 9) {
        counter = 1;
    }
}, 5000);

let counts = setInterval(updated);
let upto = 19478100;

function updated() {
    var count = document.getElementById('counter');
    upto += 100;
    count.innerHTML = upto;
    if (count.innerHTML == 19500000) {
        clearInterval(counts);
    }
}