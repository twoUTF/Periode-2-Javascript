var stoplicht=document.getElementById('stoplicht');
stoplicht.style.position='absolute';
stoplicht.style.left='715px';
stoplicht.style.top='510px';

function maakRood() {
    stoplicht.src = "../verkeer/stoplichtrood.png";
}

function maakGroen() {
    stoplicht.src = "../verkeer/stoplichtgroen.png";
}

function maakGeel() {
    stoplicht.src = "../verkeer/stoplichtgeel.png"
}

function zetUit() {
    stoplicht.src = "../verkeer/stoplichtuit.png"
}