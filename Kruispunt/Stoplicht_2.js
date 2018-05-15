function aanzetten() {
    clearTimeout(buitenwerking);
    maakRood();
    maakRood1();
    werken = setTimeout(maakGroen, 2000);
    werken = setTimeout(maakGeel, 6000);
    werken = setTimeout(maakRood, 8000);
    werken = setTimeout(maakGroen1, 10000);
    werken = setTimeout(maakGeel1, 14000);
    werken = setTimeout(aanzetten, 16000);
}

function knipperen() {
    clearTimeout(werken);
    buitenwerking = setTimeout(maakGeel, 500);
    buitenwerking = setTimeout(maakGeel1, 500);
    buitenwerking = setTimeout(ZetUit, 1000);
    buitenwerking = setTimeout(knipperen, 1000);
}

function uitzetten() {
    ZetUit();
    clearTimeout(buitenwerking);
    clearTimeout(werken);
}

function maakRood() {
    stoplicht1.src="../verkeer/stoplichtrood.png";
    stoplicht2.src="../verkeer/stoplichtrood.png";
    stop1 = true;

}
function maakGeel() {
    stoplicht1.src="../verkeer/stoplichtgeel.png";
    stoplicht2.src="../verkeer/stoplichtgeel.png";
}
function maakGroen() {
    stoplicht1.src = "../verkeer/stoplichtgroen.png";
    stoplicht2.src = "../verkeer/stoplichtgroen.png";
    stop1 = false;
}

function maakRood1() {
    stoplicht3.src="../verkeer/stoplichtrood.png";
    stoplicht4.src="../verkeer/stoplichtrood.png";
    stop2 = true;
}

function maakGeel1() {
    stoplicht3.src="../verkeer/stoplichtgeel.png";
    stoplicht4.src="../verkeer/stoplichtgeel.png";
}
function maakGroen1() {
    stoplicht3.src="../verkeer/stoplichtgroen.png";
    stoplicht4.src="../verkeer/stoplichtgroen.png";
    stop2 = false;
}

function ZetUit() {
    stoplicht1.src="../verkeer/stoplichtuit.png";
    stoplicht2.src="../verkeer/stoplichtuit.png";
    stoplicht3.src="../verkeer/stoplichtuit.png";
    stoplicht4.src="../verkeer/stoplichtuit.png";
}